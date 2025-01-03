import { list } from '@vercel/blob'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: Request) {
  // const authorizationHeader = request.headers.get('Authorization')
  // if (!authorizationHeader) {
  //   return new Response('Unauthorized', { status: 401 })
  // }

  // const token = authorizationHeader.split(' ')[1]
  // try {
  //   jwt.verify(token, SECRET_KEY) // Valida o token JWT
  // } catch {
  //   return new Response('Invalid token', { status: 403 })
  // }

  const rangeHeader = request.headers.get('Range')
  if (!rangeHeader) {
    return new Response('Range header required', { status: 416 }) // Range obrigatório
  }

  const { blobs } = await list({
    prefix: 'ilahaina/videos/'
  })

  if (!blobs.length) {
    return new Response('No videos found', { status: 404 })
  }

  const videoBlob = blobs[1]
  const videoUrl = videoBlob.url

  const response = await fetch(videoUrl, {
    headers: {
      Range: rangeHeader
    }
  })

  const status = response.status === 206 ? 206 : 200 // Certifica-se de que está retornando conteúdo parcial (206)

  return new Response(response.body, {
    status,
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': response.headers.get('Content-Length') || '',
      'Content-Range': response.headers.get('Content-Range') || '',
      'Accept-Ranges': 'bytes'
    }
  })
}
