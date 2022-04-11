const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search movies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="keyword"
            name="s"
        />
        <button className="button" type="submit">Search</button>
    </form>

);

export default SearchBar;