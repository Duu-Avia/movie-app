const PaginationMade = ({
  movies,
  postPerPage,
  setCurrentpage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(movies?.length / postPerPage); i++) {
    pages.push(i);
  }
  const clickHandlerMinus = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
    }
  };
  const clickHandlerPlus = () => {
    setCurrentpage(currentPage + 1);
  };

  return (
    <div className="flex gap-5 pt-[30px]">
      <div>
        <button onClick={clickHandlerMinus}>Prev</button>
      </div>
      {pages.map((pages, index) => (
        <button className="" onClick={() => setCurrentpage(pages)} key={index}>
          {pages}
        </button>
      ))}
      <div>
        <button onClick={clickHandlerPlus}>Next</button>
      </div>
    </div>
  );
};

export default PaginationMade;
