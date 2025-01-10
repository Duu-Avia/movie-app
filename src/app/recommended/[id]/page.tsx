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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChevronDownOutline } from "react-icons/io5";
import { FilteredGenre } from "@/app/_components/FilteredGenre";
import { SearchMain } from "@/app/_components/SearchMain";

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};

export default function PageRecommend() {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentpage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="flex justify-center items-center md:mt-[-60px] md:pb-[20px] gap-3">
        <div className="w-[90px] h-[36px] border-[1px] border-[#E4E4E7] flex justify-center items-center rounded-md max-md:hidden">
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center gap-2">
                <IoChevronDownOutline />
                <p>Genre </p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <FilteredGenre />
            </PopoverContent>
          </Popover>
        </div>
        <div className="max-md:hidden">
          <SearchMain />
        </div>
      </div>
      <div className="text-[#09090B] px-[25px] py-[20px] font-semibold">
        Recommondation
      </div>
      <div className="grid grid-cols-2 gap-[10px] px-[25px] md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {currentPost?.map((movie: MovieType) => (
          <MovieCard key={movie.id} movie={movie} />
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
