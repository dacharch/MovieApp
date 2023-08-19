import React from "react";
import { useEffect,useState } from "react";
import './App.css';
import MovieCard from './MovieCard' ;
import Icon from './searchIcon.png'
// ddd2948a api key


const API_URL = "https://www.omdbapi.com?apikey=ddd2948a" ;

const App =() =>{
    const[movies,setMovies] = useState([]);
    const[searchTerm,setMovieTerm] = useState('');
   
  
    const searchMovies = async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Superman');

    },[]);

    return (
        <div className='app'>
            <h1> Movie App </h1>
        <div className='search'>
            <input
            placeholder='Search for movies'
            value={searchTerm}
            onChange={(e)=>setMovieTerm(e.target.value)}
            />
            <img src={Icon}
            alt='search'
             onClick={()=>{searchMovies(searchTerm)}}
            />
            
        </div>
        {
            movies?.length > 0 
            ?
            (
              <div className="container">
                  
                 {
                    movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))
                 }
                  
              </div>
            ):
            (
                <div className='empty'>
                   <h2> No Movies Found </h2>
                </div>
            )
        }
        
        </div>
    );
}

export default App ;