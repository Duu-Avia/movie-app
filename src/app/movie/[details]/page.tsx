import { Navigator } from "@/app/_components/navigator";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MovieCard } from "@/app/_components/moviecard";
import { SearchMain } from "@/app/_components/SearchMain";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChevronDownOutline } from "react-icons/io5";
import { FilteredGenre } from "@/app/_components/FilteredGenre";

type ParamsType = {
  params: {
    details: string;
  };
};
type genreType = {
  id: number;
  name: string;
};

type directorType = {
  department: string;
  job: string;
  name: string;
  id: number;
};

type recoMovieType = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export default async function Page({ params }: ParamsType) {
  const apiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/${params.details}`,
    options
  );

  const resJson = await apiUrl.json();

  const creditApiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/${params.details}/credits`,
    options
  );
  const creditResJson = await creditApiUrl.json();

  const responseRecommmondations = await fetch(
    `https://api.themoviedb.org/3/movie/${params.details}/recommendations`,
    options
  );
  const recommondationMovie = await responseRecommmondations.json();

  return (
    <div>
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
      <div className="flex justify-between px-[25px]">
        <div>
          <h1 className="text-[30px] ">{resJson?.title}</h1>
          <h2>{resJson?.release_date}</h2>
        </div>
        <div className="flex items-center ">
          <div>
            <Star className="stroke-yellow-300 fill-yellow-300" />
          </div>
          <div className="text-[#71717A]">
            <div className="">{resJson.vote_average.toFixed(1)}/10</div>
            <div>{resJson.popularity.toFixed(0)}k</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[20px]  md:block">
        <div className="flex gap-6 justify-center">
          <div>
            <img
              className="w-full max-w-[290px] min-w-[100px] h-auto"
              src={`https://image.tmdb.org/t/p/original/${resJson.poster_path}`}
            />
          </div>
          <div>
            <img
              className="max-md:hidden h-[415px]"
              src={`https://image.tmdb.org/t/p/original/${resJson.backdrop_path}`}
            />
          </div>
        </div>

        <div className="">
          {resJson?.genres.map((genre: genreType) => (
            <Badge
              key={genre.id}
              variant="outline"
              className=" rounded-full mb-[20px]"
            >
              {genre.name}
            </Badge>
          ))}
          <div>{resJson.overview}</div>
        </div>
      </div>
      <div className="flex gap-8 text-[16px] px-[25px] border-b-2 py-[20px]">
        <h1 className="font-semibold">Director</h1>
        {creditResJson.crew
          .filter((director: directorType) => director.job === "Director")
          .map((director: directorType) => {
            return <h1 key={director.id}>{director.name}</h1>;
          })}
      </div>
      <div className="flex gap-8 text-[16px] px-[25px] border-b-2 py-[20px]">
        <h1 className="font-semibold">Writers </h1>
        {creditResJson.crew
          .filter((director: directorType) => director.department === "Writing")
          .slice(0, 3)
          .map((director: directorType) => {
            return <h1 key={director.id}>{director.name}</h1>;
          })}
      </div>
      <div className="flex px-[25px] gap-12 border-b-2 py-[20px]">
        <h1 className="font-semibold">Stars</h1>
        <div className="flex text-[16px]   w-[80%]">
          {creditResJson.cast.slice(0, 4).map((cast: directorType) => {
            return <h1 key={cast.id}>{cast.name}</h1>;
          })}
        </div>
      </div>

      <div className="flex justify-between px-[25px] ">
        <div className="text-[24px] text-[#09090B] font-[600] py-[30px]">
          More like this
        </div>
        <Link
          href={`/recommended/${resJson.id}`}
          className="flex items-center gap-5 text-[#09090B]"
        >
          See more
          <BsArrowRight />
        </Link>
      </div>
      <div className="flex px-[25px] gap-5 max-md:grid grid-cols-2">
        {recommondationMovie.results
          .slice(0, 5)
          .map((recoMovie: recoMovieType) => (
            <MovieCard key={recoMovie.id} movie={recoMovie} />
          ))}
      </div>
    </div>
  );
}
