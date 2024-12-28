// Movie individual page: app/artist/[slug]/page.tsx
import MovieHero from '@/src/components/MovieHero'
import MuxPlayerComponent from '@/src/components/MuxPlayer'

async function getMovie(slug: string) {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT

  if (!HYGRAPH_ENDPOINT) {
    throw new Error('HYGRAPH_ENDPOINT is not defined')
  }

  try {
    const response = await fetch(HYGRAPH_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
              query Movie($slug: String!) {
                movie(where: {slug: $slug}) {
                  federateMovie {
                    __typename
                    data {
                      Actors
                      Director
                      Genre
                      Rated
                      Plot
                      Year
                      imdbID
                      Runtime
                      Title
                    }
                  }
                  id
                  slug
                  title
                  moviePlayer
                  muxMovie
              }
            }`,
        variables: {
          slug: slug
        }
      })
    })

    const data = await response.json()

    return data.data.movie
  } catch (error) {
    return null
  }
}

export default async function Movie({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const movieData = await getMovie(slug)
  const playbackId = movieData.muxMovie?.playbackId
  if (!playbackId) {
    return <p>Playback ID not found for this movie.</p>
  }

  if (!movieData) {
    return <p>Movie data not found.</p>
  }

  return (
    <div className="p-10">
      <MuxPlayerComponent playbackId={playbackId} />
      <MovieHero
        Title={movieData.federateMovie.data.Title}
        Plot={movieData.federateMovie.data.Plot}
        Actors={movieData.federateMovie.data.Actors}
        Genre={movieData.federateMovie.data.Genre}
        Director={movieData.federateMovie.data.Director}
        Rated={movieData.federateMovie.data.Rated}
        Runtime={movieData.federateMovie.data.Runtime}
        Year={movieData.federateMovie.data.Year}
      />
    </div>
  )
}
