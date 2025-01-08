"use client";
import { useEffect, useState } from "react";
import { options } from "./Token";
import { Star } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export const SearchList = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchSearchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}`,
        options
      );
      const data = await response.json();
      setMovies(data.results.slice(0, 5));
    };
    fetchSearchData();
  }, [searchValue]);

  return (
    <>
      <div className="absolute top-[70px] left-[30px] w-100% h-100% bg-white border-[1px] border-solid rounded-lg">
        <div>
          {movies?.map((movie) => (
            <Link key={`searchMovie-${movie.id}`} href={`/movie/${movie.id}`}>
              <div className="flex px-[20px] py-[10px] gap-[20px] border-b-[1px] border-solid">
                <div className="w-[67px]">
                  <img
                    className="rounded-lg"
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-[20px] text-[#09090B] font-[600]">
                    {movie.original_title}
                  </div>

                  <div className="text-[14px] text-[#09090B] flex items-center">
                    <div>
                      <Star className="stroke-yellow-300 fill-yellow-300 w-[16px] h-[18px]" />
                    </div>
                    <div className="pl-[5px]">
                      {movie.vote_average.toFixed(1)}
                    </div>
                    <div className="text-[12px] text-[#71717A]">/10</div>
                  </div>

                  <div className="pt-[10px]">
                    {movie.release_date.slice(0, 4)}
                  </div>
                  <div className="flex">
                    <button>See more</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href={`/search?query=${searchValue}`}>
          <button className="text-[14px] text-[#09090B] py-[15px] px-[16px]">
            See all results for "{searchValue}"
          </button>
        </Link>
      </div>
    </>
  );
};
