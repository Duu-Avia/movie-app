"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { MovieCard } from "../_components/moviecard";
import { options } from "../_components/Token";
import { FilteredGenre } from "../_components/FilteredGenre";
import { Navigator } from "../_components/navigator";
import PaginationMade from "../_components/Pagination";
import { SearchMain } from "../_components/SearchMain";
import { MovieType } from "../_components/typescript";

function PageSearch() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchGenreMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        options
      );
      const movieGenre = await response.json();

      setMovies(movieGenre?.results);
    };

    fetchGenreMovies();
  }, [query]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="px-[20px] pb-[20px]">
        <div className="text-[#09090B] text-[1.5rem] font-[600] py-5">
          Search filter
        </div>
        <div className="text-[#09090B] text-[1.25rem] font-[600] ">
          Search by genre
        </div>
        <div className="text-[#09090B] text-[1rem] ">
          See lists of movies by genre
        </div>
      </div>
      <div className="px-[20px]">
        <FilteredGenre />
      </div>
      <div className="flex gap-1 px-[20px] py-[20px] text-[1.26rem] font-[600]">
        20 titles in
      </div>
      <div className="grid grid-cols-2 gap-[10px] px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">
        {currentPost?.map((movie) => (
          <MovieCard key={`movie-${movie?.id}`} movie={movie} />
        ))}
      </div>
      <PaginationMade
        movies={movies}
        postPerPage={postPerPage}
        setCurrentpage={setCurrentpage}
        currentPage={currentPage}
      />
    </>
  );
}
export default function Page() {
  return (
    <div>
      <Suspense>
        <PageSearch />
      </Suspense>
    </div>
  );
}
