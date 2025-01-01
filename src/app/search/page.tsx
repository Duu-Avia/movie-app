"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { MovieCard } from "../_components/moviecard"
import { options } from "../_components/Token"
import { FilteredGenre } from "../_components/FilteredGenre"
import { Navigator } from "../_components/navigator"
import PaginationMade from "../_components/Pagination"
export default function PageSearch (){
    const [movies, setMovies] = useState([])
const searchParams = useSearchParams()
const genres = searchParams.get('with_genres')
const [currentPage, setCurrentpage] = useState(1)
const [postPerPage,  setPostPerPage] = useState(10)

useEffect(()=>{
const fetchGenreMovies =async()=>{
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,options)
    const movieGenre = await response.json()
    setMovies(movieGenre?.results)
    
}
fetchGenreMovies()

},[])
const lastPostIndex = currentPage * postPerPage
const firstPostIndex = lastPostIndex - postPerPage
const currentPost = movies.slice(firstPostIndex, lastPostIndex)



    return (<>
    <Navigator/>
    <div>Search filter</div>
    <div>Search by genre</div>
    <div>See lists of movies by genre</div>
    <FilteredGenre/>
    <div className="grid grid-cols-2 gap-[10px] px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">{currentPost?.map((movie)=>(<MovieCard key={`movie-${movie.id}`} movie={movie}/>))}</div>
    <PaginationMade movies={movies} postPerPage={postPerPage} setCurrentpage={setCurrentpage} currentPage={currentPage} />
    </>
    
)
}



// https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1