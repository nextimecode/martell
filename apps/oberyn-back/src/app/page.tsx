// import { Code } from '@nextui-org/code'
// import { Link } from '@nextui-org/link'
// import { Snippet } from '@nextui-org/snippet'
// import { button as buttonStyles } from '@nextui-org/theme'

// import { GithubIcon } from '@/components/icons'
// import MovieCard from '@/components/MovieCard'
import { title } from '@/components/primitives'

// import { env } from '@/env'

// import { siteConfig } from '@/config/site'

// Get featured Movies

// async function getFeaturedMovies() {
//   // eslint-disable-next-line no-console
//   console.log('Env during build:', process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT)
//   const NEXT_PUBLIC_HYGRAPH_ENDPOINT = env.NEXT_PUBLIC_HYGRAPH_ENDPOINT
//   if (!NEXT_PUBLIC_HYGRAPH_ENDPOINT) {
//     throw new Error('NEXT_PUBLIC_HYGRAPH_ENDPOINT is not defined')
//   }
//   const response = await fetch(NEXT_PUBLIC_HYGRAPH_ENDPOINT, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       query: `
// 		query Movies {
// 		  movies(first: 8) {
// 			  federateMovie {
// 				data {
// 				  Title
// 				  Poster
// 				  Genre
// 				  Director
// 				}
// 			  }
// 			  id
// 			  slug
//         title
//         subtitle
// 			  moviePoster {
// 				height
// 				width
// 				url
// 			  }
// 			}
// 		}`
//     })
//   })
//   const json = await response.json()
//   return json.data.movies
// }

export default async function Home() {
  // const movies = await getFeaturedMovies()

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="justify-center inline-block max-w-lg text-center">
          <h1 className={title({ color: 'violet', size: 'jumbo' })}>
            NeXTFANS&nbsp;
          </h1>
          <br />
          <h2 className={title({ size: 'sm' })}>
            Uma assinatura, acesso total a{' '}
          </h2>
          {/* <h2 className={subtitle({ class: "mt-4" })}>
            8 criadoras de conteúdo
          </h2> */}
        </div>

        {/* <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div> */}
      </section>
      <div className="flex flex-col justify-between">
        <section className="mb-32 text-center">
          <h2 className={title({ size: 'lg' })}>10 criadoras de conteúdo</h2>
          <div className="grid px-5 mt-4 lg:gap-xl-12 gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {/* {movies.map(
              (movie: {
                id: string
                federateMovie: {
                  data: {
                    Title: string
                    Poster: string
                    alt: string
                    Genre: string
                    Director: string
                  }
                }
                slug: string
                title: string
                subtitle: string
                moviePoster: {
                  height: number
                  width: number
                  url: string
                }
              }) => (
                <MovieCard
                  key={movie.id}
                  Title={movie.title}
                  Poster={movie.federateMovie.data.Poster}
                  moviePoster={movie.moviePoster}
                  alt={movie.federateMovie.data.Title}
                  Genre={movie.subtitle}
                  Director={movie.federateMovie.data.Director}
                  slug={movie.slug}
                />
              )
            )} */}
          </div>
        </section>
      </div>
    </>
  )
}
