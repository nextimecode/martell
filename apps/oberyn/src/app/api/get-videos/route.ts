import { list } from '@vercel/blob'

export async function GET() {
  const { blobs } = await list({
    prefix: 'ilahaina/videos/'
  })
  return Response.json(blobs.slice(1))
}
