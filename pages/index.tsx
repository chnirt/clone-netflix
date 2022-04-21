import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import {
  actionUrl,
  adventureUrl,
  animationUrl,
  crimeUrl,
  nowPlayingUrl,
  popularUrl,
  topRatedUrl,
  trendingUrl,
  upcomingUrl,
} from '../utils/request'

const Home: NextPage = ({
  nowPlayingMovies,
  popularMovies,
  trendingMovies,
  upcomingMovies,
  topRatedMovies,
  actionMovies,
  adventureMovies,
  animationMovies,
  crimeMovies,
}: any) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Banner data={nowPlayingMovies} />
        <section className="my-9 space-y-9">
          <Row title={'Popular on Netflix'} movies={popularMovies} />
          <Row title={'Trending Now'} movies={trendingMovies} />
          <Row title={'Upcoming'} movies={upcomingMovies} />
          <Row title={'Top Rated'} movies={topRatedMovies} />
          <Row title={'Action'} movies={actionMovies} />
          <Row title={'Adventure'} movies={adventureMovies} />
          <Row title={'Animation'} movies={animationMovies} />
          <Row title={'Crime'} movies={crimeMovies} />
        </section>
      </main>
      {/* Modal */}

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

export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  // return { props: { data } }
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
    (await fetch(popularUrl)).json(),
    (await fetch(trendingUrl)).json(),
    (await fetch(upcomingUrl)).json(),
    (await fetch(topRatedUrl)).json(),
    (await fetch(actionUrl)).json(),
    (await fetch(adventureUrl)).json(),
    (await fetch(animationUrl)).json(),
    (await fetch(crimeUrl)).json(),
  ])
  return {
    props: {
      nowPlayingMovies: nowPlayingResponse.results,
      popularMovies: popularMoviesResponse.results,
      trendingMovies: trendingMoviesResponse.results,
      upcomingMovies: upcomingMoviesResponse.results,
      topRatedMovies: topRatedMoviesResponse.results,
      actionMovies: actionMoviesResponse.results,
      adventureMovies: adventureMoviesResponse.results,
      animationMovies: animationMoviesResponse.results,
      crimeMovies: crimeMoviesResponse.results,
    },
  }
}

export default Home
