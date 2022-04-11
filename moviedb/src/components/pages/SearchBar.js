// const SearchBar = () => (
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden">Search movies</span>
//         </label>
//         <input
//             type="text"
//             id="header-search"
//             placeholder="keyword"
//             name="s"
//         />
//         <button className="button" type="submit">Search</button>
//     </form>

// );

// export default SearchBar;

import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../pages/SearchResults";


function SearchBar() {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <>
            <TextField
                id="standard-basic"
                onChange={inputHandler}
                variant="filled"
                fullWidth
                label="Search"
                size="small"
                color="warning"
            />
            <List input={inputText} />
        </>
    );
}

export default SearchBar;