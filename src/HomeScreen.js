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
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    </div>
  )
}

export default HomeScreen