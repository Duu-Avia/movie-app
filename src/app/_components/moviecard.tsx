import { Star } from "lucide-react";
import Link from "next/link";
import { MovieType } from "./typescript";

type MovieCardType = {
  movie : MovieType
}


export const MovieCard:React.FC<MovieCardType> = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-lg bg-gray-100">
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />

        <div className="p-2">
          <div className="flex gap-2 items-center">
            <Star className="stroke-yellow-300 fill-yellow-300" />
            <p>{movie?.vote_average?.toFixed(1)}</p>
          </div>
          <div />
          <p>{movie.title}</p>
          <div />
        </div>
      </div>
    </Link>
  );
};
