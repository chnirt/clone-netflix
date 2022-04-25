import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'
import { useLoading } from '../context/useLoading'
import {
  actionUrl,
  adventureUrl,
  animationUrl,
  crimeUrl,
  netflixUrl,
  nowPlayingUrl,
  topRatedUrl,
  trendingUrl,
  upcomingUrl,
} from '../utils/request'

// const image_base_url = 'https://image.tmdb.org/t/p/original'

const Home: NextPage = () => {
  const { show, hide } = useLoading()
  const [data, setData] = useState<any>(null)
  const fetchData = useCallback(async () => {
    try {
      // show()
      const [
        nowPlayingResponse,
        popularMoviesResponse,
        trendingMoviesResponse,
        upcomingMoviesResponse,
        topRatedMoviesResponse,
        actionMoviesResponse,
        adventureMoviesResponse,
        animationMoviesResponse,
        crimeMoviesResponse,
      ] = await Promise.all([
        (await fetch(nowPlayingUrl)).json(),
        (await fetch(netflixUrl)).json(),
        (await fetch(trendingUrl)).json(),
        (await fetch(upcomingUrl)).json(),
        (await fetch(topRatedUrl)).json(),
        (await fetch(actionUrl)).json(),
        (await fetch(adventureUrl)).json(),
        (await fetch(animationUrl)).json(),
        (await fetch(crimeUrl)).json(),
      ])
      setData({
        nowPlayingMovies: nowPlayingResponse.results,
        popularMovies: popularMoviesResponse.results,
        trendingMovies: trendingMoviesResponse.results,
        upcomingMovies: upcomingMoviesResponse.results,
        topRatedMovies: topRatedMoviesResponse.results,
        actionMovies: actionMoviesResponse.results,
        adventureMovies: adventureMoviesResponse.results,
        animationMovies: animationMoviesResponse.results,
        crimeMovies: crimeMoviesResponse.results,
      })
    } catch (error) {
    } finally {
      // hide()
    }
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  if (data === null) return null
  return (
    <div className="relative h-screen lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/netflix.ico" />
      </Head>

      <main>
        <div className="block h-[70px]">
          <Navbar />
        </div>
        <Banner data={data.nowPlayingMovies} />
        <section className="relative z-0 block min-h-[1000px]">
          <div className="mt-[-70px]">
            {/* <div className="relative z-[1] block">
              <div className="z-0 block h-[56.25vw] w-full">
                <div className="absolute top-0 right-0 left-0 bottom-0">
                  {(nowPlayingMovies[0]?.poster_path ||
                    nowPlayingMovies[0]?.backdrop_path) && (
                    <img
                      className="object-cover"
                      src={
                        nowPlayingMovies[0]?.poster_path ||
                        nowPlayingMovies[0]?.backdrop_path
                          ? `${image_base_url}/${
                              nowPlayingMovies[0]?.poster_path ||
                              nowPlayingMovies[0]?.backdrop_path
                            }`
                          : 'none'
                      }
                    />
                  )}
                </div>
              </div>
            </div> */}
            <Row title={'Popular on Netflix'} movies={data.popularMovies} />
            <Row title={'Trending Now'} movies={data.trendingMovies} />
            <Row title={'Upcoming'} movies={data.upcomingMovies} />
            <Row title={'Top Rated'} movies={data.topRatedMovies} />
            <Row title={'Action'} movies={data.actionMovies} />
            <Row title={'Adventure'} movies={data.adventureMovies} />
            <Row title={'Animation'} movies={data.animationMovies} />
            <Row title={'Crime'} movies={data.crimeMovies} />
          </div>
        </section>
      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()

//   // Pass data to the page via props
//   // return { props: { data } }
//   const [
//     nowPlayingResponse,
//     popularMoviesResponse,
//     trendingMoviesResponse,
//     upcomingMoviesResponse,
//     topRatedMoviesResponse,
//     actionMoviesResponse,
//     adventureMoviesResponse,
//     animationMoviesResponse,
//     crimeMoviesResponse,
//   ] = await Promise.all([
//     (await fetch(nowPlayingUrl)).json(),
//     (await fetch(netflixUrl)).json(),
//     (await fetch(trendingUrl)).json(),
//     (await fetch(upcomingUrl)).json(),
//     (await fetch(topRatedUrl)).json(),
//     (await fetch(actionUrl)).json(),
//     (await fetch(adventureUrl)).json(),
//     (await fetch(animationUrl)).json(),
//     (await fetch(crimeUrl)).json(),
//   ])
//   return {
//     props: {
//       nowPlayingMovies: nowPlayingResponse.results,
//       popularMovies: popularMoviesResponse.results,
//       trendingMovies: trendingMoviesResponse.results,
//       upcomingMovies: upcomingMoviesResponse.results,
//       topRatedMovies: topRatedMoviesResponse.results,
//       actionMovies: actionMoviesResponse.results,
//       adventureMovies: adventureMoviesResponse.results,
//       animationMovies: animationMoviesResponse.results,
//       crimeMovies: crimeMoviesResponse.results,
//     },
//   }
// }

export default Home
