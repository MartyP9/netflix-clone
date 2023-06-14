import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Row = ({title, fetchURL, isLargeRow=false}) => {
    const [movies, setMovies] = useState([])
    const base_URL = 'https://image.tmdb.org/t/p/original/'
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchURL])
    
  return (
    <div>Row</div>
  )
}

export default Row