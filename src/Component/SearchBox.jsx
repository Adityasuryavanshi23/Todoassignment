const SearchBox = ({ searchvalue, setsearchvalue }) => {
  return (
    <div className="input-group ">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        value={searchvalue}
        onChange={(e) => setsearchvalue(e.target.value)}
        className="form-control"
        placeholder="Search your task here..."
        aria-label="search"
      />
    </div>
  );
};

export default SearchBox;
