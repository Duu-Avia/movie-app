import Image from "next/image";
import { Footer } from "./_components/footer";
import { Input } from "@/components/ui/input";
import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { SearchIcon } from "./_components/searchicon";
import { DarkMode } from "./_components/DarkMode";
import { Navigator, NavigatorActive } from "./_components/navigator";
import { Section } from "./_components/section";
import { endianness } from "os";
import { options } from "./_components/Token";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { SearchMain } from "./_components/SearchMain";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoChevronDownOutline } from "react-icons/io5";
import { FilteredGenre } from "./_components/FilteredGenre";

export default async function Home() {
  const data1 = await fetch(
    `https://api.themoviedb.org/3/movie/1125510`,
    options
  );
  const response1 = await data1.json();
  const data2 = await fetch(
    `https://api.themoviedb.org/3/movie/84427`,
    options
  );
  const response2 = await data2.json();
  const data3 = await fetch(
    `https://api.themoviedb.org/3/movie/60098`,
    options
  );
  const response3 = await data3.json();

  return (
    <>
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
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Link href={`/movie/${response1.id}`}>
              <div className=" justify-between  gap-10">
                <div>
                  <img
                    className="w-full h-full"
                    src={`https://image.tmdb.org/t/p/original/${response1.backdrop_path}`}
                  />
                </div>
                <div className="lg:mt-[-500px]  md:mt-[-400px] md:pl-[100px] xl:mt-[-600px]  2xl:mt-[-800px] md:text-white">
                  <div className="px-[25px] pt-[20px]">Now playing:</div>
                  <div className="flex justify-between  px-[25px] md:block">
                    <div>
                      <h1 className="text-[30px] ">{response1?.title}</h1>
                      <h2 className="md:hidden">{response1?.release_date}</h2>
                    </div>
                    <div className="flex items-center ">
                      <div>
                        <Star className="stroke-yellow-300 fill-yellow-300" />
                      </div>
                      <div className="text-[#71717A] ">
                        <div className="">
                          {response1.vote_average.toFixed(1)}/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[25px]">
                    <div className="md:w-[400px]">{response1.overview}</div>
                  </div>
                  <div className="px-[20px] pt-[20px] pb-[40px]">
                    <Button>
                      <Play /> Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Link href={`/movie/${response2.id}`}>
              <div className=" justify-between  gap-10">
                <div className="">
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/original/${response2.backdrop_path}`}
                  />
                </div>
                <div className="lg:mt-[-500px]  md:mt-[-400px] md:pl-[100px] xl:mt-[-600px]  2xl:mt-[-800px] md:text-white">
                  <div className="px-[25px]">Now playing:</div>
                  <div className="flex justify-between  px-[25px] md:block">
                    <div>
                      <h1 className="text-[30px] ">{response2?.title}</h1>
                      <h2 className="md:hidden">{response2?.release_date}</h2>
                    </div>
                    <div className="flex items-center ">
                      <div>
                        <Star className="stroke-yellow-300 fill-yellow-300" />
                      </div>
                      <div className="text-[#71717A] ">
                        <div className="">
                          {response2.vote_average.toFixed(1)}/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[25px]">
                    <div className="md:w-[400px]">{response2.overview}</div>
                  </div>
                  <div className="px-[20px] pt-[20px] pb-[40px]">
                    <Button>
                      <Play /> Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem>
            {" "}
            <Link href={`/movie/${response3.id}`}>
              <div className=" justify-between  gap-10">
                <div className="">
                  <img
                    className="w-full"
                    src={`https://image.tmdb.org/t/p/original/${response3.backdrop_path}`}
                  />
                </div>
                <div className="lg:mt-[-500px]  md:mt-[-400px] md:pl-[100px] xl:mt-[-600px]  2xl:mt-[-800px] md:text-white">
                  <div className="px-[25px]">Now playing:</div>
                  <div className="flex justify-between  px-[25px] md:block">
                    <div>
                      <h1 className="text-[30px] ">{response3?.title}</h1>
                      <h2 className="md:hidden">{response3?.release_date}</h2>
                    </div>
                    <div className="flex items-center ">
                      <div>
                        <Star className="stroke-yellow-300 fill-yellow-300" />
                      </div>
                      <div className="text-[#71717A] ">
                        <div className="">
                          {response3.vote_average.toFixed(1)}/10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-[25px]">
                    <div className="md:w-[400px]">{response3.overview}</div>
                  </div>
                  <div className="px-[20px] pt-[20px] pb-[40px]">
                    <Button>
                      <Play /> Watch Trailer
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
      </Carousel>

      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top_rated" endpoint="top_rated" />
    </>
  );
}
