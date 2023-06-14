import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'

const HomeScreen = () => {
  return (
    <div className='app'>
        <div className="homescreen">
            <Nav/>
            <Banner/>
            <Row title='NETFLIX ORIGINALS' fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='TRENDING NOW' fetchURL={requests.fetchTrending} />
            <Row title='Top Rated' fetchURL={requests.fetchTopRated} />
            <Row title='Action Movies' fetchURL={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchURL={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchURL={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchURL={requests.fetchDocumentaries} />
        </div>
    </div>
  )
}

export default HomeScreen