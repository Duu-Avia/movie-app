"use client";
import { MovieCard } from "@/app/_components/moviecard";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaginationMade from "@/app/_components/Pagination";


type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};

export default function Page() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentpage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(10)
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };


  useEffect(() => {
    const RecoMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?`,
        options
      );
      const data = await response.json();
      setMovies(data?.results);
    };
    RecoMovie();
  }, []);
  const lastPostIndex =  currentPage * postPerPage
  const firstPostIndex = lastPostIndex - postPerPage
  const currentPost = movies.slice(firstPostIndex, lastPostIndex)




  return (
    <>
      <div className="text-[#09090B] px-[25px] py-[20px] font-semibold">
        Recommondation
      </div>
      <div className="grid grid-cols-2 gap-[10px] px-[25px] md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {currentPost?.map((movie: MovieType) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      
      <PaginationMade movies={movies} postPerPage={postPerPage} setCurrentpage={setCurrentpage}/>
    </> 
  );
}
