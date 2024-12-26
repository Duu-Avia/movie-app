import { Navigator } from "@/app/_components/navigator";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
type ParamsType = {
  params: {
    details: string;
  };
}
type genreType = {
  id: number;
  name: string;
}

type directorType = {
  department: string;
  job: string;
  name: string;
  id: number;
};



const options= {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE",
  },
};

export default async function Page({ params }:ParamsType) {
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
      <div className="flex justify-between px-[20px] gap-10">
        <div className="">
          <img src={`https://image.tmdb.org/t/p/w780/${resJson.poster_path}`} />
        </div>

        <div className="">
          {resJson?.genres.map((genre:genreType) => (
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
          .filter((director:directorType) => director.job === "Director")
          .map((director:directorType) => {
            return <h1 key={director.id}>{director.name}</h1>;
          })}
      </div>
      <div className="flex gap-8 text-[16px] px-[25px] border-b-2 py-[20px]">
        <h1 className="font-semibold">Writers </h1>
        {creditResJson.crew.filter((director:directorType) => director.department === "Writing").slice(0,3)
          .map((director:directorType) => {
            return <h1 key={director.id}>{director.name}</h1>;
          })}</div>
          <div className="flex px-[25px] gap-12 border-b-2 py-[20px]">
          <h1 className="font-semibold">Stars</h1> 
      <div className="flex text-[16px]   w-[80%]">
        
        {creditResJson.cast.slice(0,4).map((cast:directorType) => {
            return <h1 key={cast.id}>{cast.name}</h1>;
          })}</div></div>
    </>
  );
}
