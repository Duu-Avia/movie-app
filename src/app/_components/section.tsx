import { MovieCard } from "./moviecard";
import { BsArrowRight } from "react-icons/bs";


const option = {  
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },}
export const Section = async ({title, endpoint}) => {
        

       const apiUrl = await fetch(`https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`,option);
        const resJson = await apiUrl.json();
        const movies = resJson.results.slice(0, 10)
       

        
    
   
    
    
return <>
    <div className="flex justify-between p-5 font-semibold">{title} <button className="flex items-center gap-5">See more<BsArrowRight/> </button></div>
    
    <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">
    
    {movies.map((movie)=>(<div key={movie.id}>
    
    <MovieCard movie={movie}/> 
    </div>))}</div>
    </>
}