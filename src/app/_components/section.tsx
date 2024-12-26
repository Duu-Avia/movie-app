import Link from "next/link";
import { MovieCard } from "./moviecard";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  title: string;
  endpoint: string;
};
type Movietype = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};
const option = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};
export const Section = async ({ title, endpoint }: Props) => {
  const apiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=4`,
    option
  );
  const resJson = await apiUrl.json();
  const movies = resJson.results?.slice(0, 10);

  return (
    <>
      <div className="flex justify-between p-5 font-semibold">
        {title}
        <Link href={`/${endpoint}`} className="flex items-center gap-5">
          See more
          <BsArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-5 lg:px-10 ">
        {movies?.map((movie:Movietype) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
};
