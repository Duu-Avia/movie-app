"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { MovieCard } from "../_components/moviecard";
import { options } from "../_components/Token";
import { FilteredGenre } from "../_components/FilteredGenre";
import { Navigator } from "../_components/navigator";
import PaginationMade from "../_components/Pagination";
import { MovieType } from "../_components/typescript";
function PageSearch() {
  const [movies, setMovies] = useState([]);

  const searchParams = useSearchParams();
  const genres = searchParams.get("with_genres");
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchGenreMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genres}&language=en-US&page=1`,
        options
      );
      const movieGenre = await response.json();

      setMovies(movieGenre?.results);
    };

    fetchGenreMovies();
  }, [genres]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies?.slice(firstPostIndex, lastPostIndex);
  const TestText = () => {
    if (genres === "28") {
      return <div>"Action"</div>;
    }
    if (genres === "12") {
      return <div>"Adventure"</div>;
    }
    if (genres === "16") {
      return <div>"Animation"</div>;
    }
    if (genres === "35") {
      return <div>"Comedy"</div>;
    }
    if (genres === "80") {
      return <div>"Crime"</div>;
    }
    if (genres === "99") {
      return <div>"Documentary"</div>;
    }
    if (genres === "18") {
      return <div>"Drama"</div>;
    }
    if (genres === "10751") {
      return <div>"Family"</div>;
    }
    if (genres === "14") {
      return <div>"Fantasy"</div>;
    }
    if (genres === "36") {
      return <div>"History"</div>;
    }
    if (genres === "27") {
      return <div>"Horror"</div>;
    }
    if (genres === "10402") {
      return <div>"Music"</div>;
    }
    if (genres === "9648") {
      return <div>"Mystery"</div>;
    }
    if (genres === "10749") {
      return <div>"Romance"</div>;
    }
    if (genres === "878") {
      return <div>Science "Fiction"</div>;
    }
    if (genres === "10770") {
      return <div>"Tv Movie"</div>;
    }
    if (genres === "53") {
      return <div>"Thriller"</div>;
    }
    if (genres === "10752") {
      return <div>"War"</div>;
    }
    if (genres === "37") {
      return <div>"Western"</div>;
    }
  };

  return (
    <>
      <div className="md:flex">
        <div className="px-[30px]">
          <div className=" px-[20px] pb-[20px]">
            <div className="text-[#09090B] text-[1.5rem] font-[600] py-5">
              Search filter
            </div>
            <div className="text-[#09090B] text-[1.25rem] font-[600] ">
              Genre
            </div>
            <div className="text-[#09090B] text-[1rem] ">
              See lists of movies by genre
            </div>
          </div>
          <div className="px-[20px] ">
            <FilteredGenre />
          </div>
        </div>
        <div className="border-solid border-l-[1px]">
          <div className="flex gap-1 px-[40px] py-[20px] text-[1.26rem] font-[600]">
            20 titles in <TestText />
          </div>
          <div className="grid grid-cols-2 gap-[10px] px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">
            {currentPost?.map((movie: MovieType) => (
              <MovieCard key={`movie-${movie?.id}`} movie={movie} />
            ))}
          </div>
        </div>
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

export function Page() {
  return (
    <Suspense>
      <PageSearch />
    </Suspense>
  );
}
// https://api.themoviedb.org/3/discover/movie?with_genres=16&language=en-US&page=1
