import { Metadata } from 'next'

import { VideoPlayer } from '../../../components/video-player'

import { api } from '../../../data/api'

async function getFeaturedMovies() {
  const response = await api('/get-videos')
  return response.json()
}

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default async function Home() {
  const movies = await getFeaturedMovies()

  console.log('movies', movies)

  return (
    <main>
      <main>
        <div>
          <h1>Video Player</h1>
          {movies.length > 0 ? (
            <VideoPlayer src={movies[0].url} />
          ) : (
            <p>Nenhum vídeo disponível no momento.</p>
          )}
        </div>
      </main>
    </main>
  )
}
