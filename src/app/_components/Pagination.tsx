const PaginationMade = ({movies, postPerPage, setCurrentpage}) =>{
    let pages = []
    for(let i = 1; i <= Math.ceil(movies.length/postPerPage); i++){
        pages.push(i)
    }
    console.log(movies)
    console.log(pages)
    return (
    <div>
         {pages.map((pages, index)=>(<button className="ml-[20px]" onClick={()=>setCurrentpage(pages)} key={index}>{pages}</button>))}
    </div>)

}

export default PaginationMade