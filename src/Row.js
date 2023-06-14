import React, { useEffect, useState } from 'react'
import axios from './axios'
import './assets/css/Row.css'

const Row = ({title, fetchUrl, isLargeRow=false}) => {
    const [movies, setMovies] = useState([])
    const base_URL = 'https://image.tmdb.org/t/p/original/';

    // Fetch movies data when component mounts and update state with new value of the array
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request            
        }
        fetchData()
    },[fetchUrl])

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className='row-posters'>
                {movies.map((movie)=>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <><img key={movie.id}
                        src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} alt={movie.name}
                        className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                        title={movie.name}
                        />
                        </>
                    )
                )}
            </div>
    </div>
  )
}

export default Row