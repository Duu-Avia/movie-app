"use client"

import { useEffect, useState } from "react"
import { options } from "./Token"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from 'lucide-react';
import Link from "next/link";

 //
export const FilteredGenre = ()=> {
const [genres, setGenres] = useState ([])
useEffect(()=> {
    const FetchGenre = async()=> {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',options)
        const data = await response.json()
        setGenres(data.genres)
    }
   
    FetchGenre()
},[])
return (<>
<div>
{genres?.map((genre)=>(<Link  key={`genres-${genre.id}`} href={`/search?with_genres=${genre.id}`}> <Badge>{genre.name}<ChevronRight /></Badge> </Link>))}
</div>
    

</>)
} 