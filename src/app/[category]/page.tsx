"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MovieCard } from "../_components/moviecard";
import { useRouter } from "next/navigation";
type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
};

type ParamsType = {
  params: {
    category: string;
  };
};

type NewPageType = number | string;

export default function Page() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";
  const [movies, setMovies] = useState<MovieType[]>();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data?.results?.slice(0, 5));
    };
    fetchMovies();
  }, [params]);
  const onChangePage = (newPage: NewPageType) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set("page", newPage.toString());
    const newUrl = pathname + "?" + newSearchParams.toString();
    router.push(newUrl);
  };

  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => onChangePage(1)}>1</PaginationLink>
            <PaginationLink onClick={() => onChangePage(2)}>2</PaginationLink>
            <PaginationLink onClick={() => onChangePage(3)}>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
