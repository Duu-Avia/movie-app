"use client";

import { useEffect, useState } from "react";
import { options } from "./Token";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

//
export const FilteredGenre = () => {
  const genreId = 12;
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const FetchGenre = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        options
      );
      const data = await response.json();
      setGenres(data.genres);
    };

    FetchGenre();
  }, []);
  return (
    <>
      <div>
        {genres?.map((genre) => (
          <Link
            key={`genred-${genre.id}`}
            href={`/discover?with_genres=${genre.id}`}
          >
            <Badge
              variant="outline"
              className={` ${
                genreId == genre.id ? "font-bold" : "font-normal"
              }`}
            >
              {genre.name}
              <ChevronRight />
            </Badge>
          </Link>
        ))}
      </div>
    </>
  );
};
