import Image from "next/image";
import { Footer } from "./_components/footer";
import { Input } from "@/components/ui/input";
import { FiFilm } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiMoonLight } from "react-icons/pi";
import { SearchIcon } from "./_components/searchicon";
import { DarkMode } from "./_components/darkmode";
import { Navigator, NavigatorActive } from "./_components/navigator";
import { Section } from "./_components/section";
import { endianness } from "os";
import { options } from "./_components/Token";



export default function Home() {
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((res) => res.json())
    .then((data) => {});

  return (
    <>
      <Navigator />
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top_rated" endpoint="top_rated" />
    </>
  );
}
