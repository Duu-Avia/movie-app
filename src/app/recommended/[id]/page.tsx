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

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || "1"
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  const onChangePage =(newPage)=> {
    const newSearchParams =
  }

  useEffect(() => {
    const RecoMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?${page}`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 10));
    };
    RecoMovie();
  }, []);

  return (
    <>
      <div className="text-[#09090B] px-[25px] py-[20px] font-semibold">
        Recommondation
      </div>
      <div className="grid grid-cols-2 gap-[10px] px-[25px] md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie: MovieType) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
            <PaginationLink>2</PaginationLink>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
