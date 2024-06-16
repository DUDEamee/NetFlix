import React, { useEffect, useState } from 'react'
import {API_KEY ,imageUrl} from '../../Constants/constants'
import axios from '../../axios'
import "./Banner.css"
const Banner = () => {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
      console.log(responce.data.results[18])
      setMovie(responce.data.results[18])
    })
  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title: ""}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie ? movie.title : ""}</h1>
      </div>
      <div className="fadeBottom">

      </div>
    </div>
  )
}

export default Banner
