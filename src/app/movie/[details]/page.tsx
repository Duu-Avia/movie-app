import { Navigator } from "@/app/_components/navigator";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export default async function Page({ params }) {
  const apiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/${params.details}`,
    options
  );

  const resJson = await apiUrl.json();
  const movieDetails = resJson.movie;

  const creditApiUrl = await fetch(
    `https://api.themoviedb.org/3/movie/${params.details}/credits`,
    options
  );

  const creditResJson = await creditApiUrl.json();

  console.log(creditResJson);
  return (
    <>
      <Navigator />
      <div className="flex justify-between">
        <div>
          <h1 className="text-[30px]">{resJson?.title}</h1>
          <h2>{resJson?.release_date}</h2>
        </div>
        <div className="flex items-center">
          <div>
            <Star className="stroke-yellow-300 fill-yellow-300" />
          </div>
          <div className="text-[#71717A]">
            <div className="">{resJson.vote_average.toFixed(1)}/10</div>
            <div>{resJson.popularity.toFixed(0)}k</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[20px] gap-10">
        <div className="">
          <img src={`https://image.tmdb.org/t/p/w780/${resJson.poster_path}`} />
        </div>

        <div className="">
          {resJson?.genres.map((genre) => (
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
      <div>
        Director{" "}
        {creditResJson.crew
          .filter((director) => director.job === "Director")
          .map((director) => {
            return <h1>{director.name}</h1>;
          })}
      </div>
      <div>Writers </div>
      <div>Stars</div>
    </>
  );
}
