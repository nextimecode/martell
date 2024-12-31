import { Metadata } from 'next'

// import { env } from '@/env'

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

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default async function Home() {
  // const movies = await getFeaturedMovies()

  // console.log(movies)
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  )
}
