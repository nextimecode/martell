import { list } from '@vercel/blob'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key'

export async function GET(request: Request) {
  const authorizationHeader = request.headers.get('Authorization')
  if (!authorizationHeader) {
    return new Response('Unauthorized', { status: 401 })
  }

  const token = authorizationHeader.split(' ')[1]
  try {
    jwt.verify(token, SECRET_KEY)
  } catch {
    return new Response('Invalid token', { status: 403 })
  }

  const range = request.headers.get('range') || ''

  const { blobs } = await list({
    prefix: 'ilahaina/videos/'
  })

  if (!blobs.length) {
    return new Response('No videos found', { status: 404 })
  }

  const videoBlob = blobs[0]
  const videoUrl = videoBlob.url

  const videoResponse = await fetch(videoUrl, {
    headers: { range }
  })

  return new Response(videoResponse.body, {
    status: videoResponse.status,
    headers: {
      'Content-Type': 'video/mp4',
      'Content-Length': videoResponse.headers.get('content-length') || '',
      'Accept-Ranges': 'bytes',
      'Content-Range': videoResponse.headers.get('content-range') || ''
    }
  })
}
