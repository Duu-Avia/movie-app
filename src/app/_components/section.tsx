"use client"
import Link from "next/link";
import { MovieCard } from "./moviecard";
import { BsArrowRight } from "react-icons/bs";
import { Skeleton } from "./Skeleton";
import { useState, useEffect } from "react";
import { MovieType } from "./typescript";

type Props = {
  title: string;
  endpoint: string;
};

const option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export const Section = ({ title, endpoint }: Props) => {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const apiUrl = await fetch(
          `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=4`,
          option
        );
        const resJson = await apiUrl.json();
        setMovies(resJson?.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint]);

  return (
    <>
      <div className="flex justify-between p-5 py-[45px] font-[600] text-[1.5rem] lg:px-10">
        {title}
        <Link
          href={`/${endpoint}`}
          className="flex items-center gap-5 text-[0.9rem] font-[500]"
        >
          See more
          <BsArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-[10px] px-[20px] md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {loading ? (
          Array.from({ length: 10 }).map((_, idx) => <Skeleton key={idx} />)
        ) : (
          movies?.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
    </>
  );
};
