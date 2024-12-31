"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MovieCard } from "../_components/moviecard"
import { options } from "../_components/Token"
import { FilteredGenre } from "../_components/FilteredGenre"
import { Navigator } from "../_components/navigator"
export default function Page (){
    const [genreMovie, setGenreMovie] = useState([])
const searchParams = useSearchParams()
const genres = searchParams.get('with_genres')

useEffect(()=>{
const fetchGenreMovies =async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,options)
    const movieGenre = await response.json()
    setGenreMovie(movieGenre.results)
    
}
fetchGenreMovies()

},[])
console.log(genreMovie)

    return (<>
    <Navigator/>
    <div>Search filter</div>
    <div>Search by genre</div>
    <div>See lists of movies by genre</div>
    <FilteredGenre/>
    <div className="grid grid-cols-2 gap-[10px] px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">{genreMovie.map((movie)=>(<MovieCard key={`movie-${movie.id}`} movie={movie}/>))}</div>
    </>
    
)
}



// https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1