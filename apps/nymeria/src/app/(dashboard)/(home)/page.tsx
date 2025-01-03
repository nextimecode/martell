import { Metadata } from 'next'

import { VideoPlayer } from '@/components/video-player'

import jwt from 'jsonwebtoken'

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function Home() {
  // Simulando um token JWT. Na prática, obtenha-o a partir do login ou cookies.
  const SECRET_KEY = 'your-secret-key' // Deve ser o mesmo utilizado no seu endpoint GET

  const token = jwt.sign(
    { userId: 123, role: 'admin' }, // Payload
    SECRET_KEY, // Chave secreta
    { expiresIn: '1h' } // Expiração
  )

  return (
    <main>
      <div>
        <h1>Video Player</h1>
        <VideoPlayer src="/api/get-videos" token={token} />
      </div>
    </main>
  )
}
