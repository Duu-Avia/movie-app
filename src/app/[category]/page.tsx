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
import { Suspense, useEffect, useState } from "react";
import { MovieCard } from "../_components/moviecard";
import { useRouter } from "next/navigation";
import PaginationMade from "../_components/Pagination";
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

function PageContent() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const [movies, setMovies] = useState<MovieType[]>([]);
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
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data?.results);
    };
    fetchMovies();
  }, [params]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = movies.slice(firstPostIndex, lastPostIndex);
  const onChangePage = (newPage: NewPageType) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    newSearchParams.set("page", newPage.toString());
    const newUrl = pathname + "?" + newSearchParams.toString();
    router.push(newUrl);
  };

  return (
    <div className="px-[20px]">
      <div className="text-[#09090B] text-[1.5rem] font-[600] py-[35px]">
        {params.category}
      </div>
      <div className="grid grid-cols-2 gap-[10px]  md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">
        {currentPost?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <PaginationMade
        movies={movies}
        postPerPage={postPerPage}
        setCurrentpage={setCurrentpage}
        currentPage={currentPage}
      />
    </div>
  );
}
export default function Page() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}
