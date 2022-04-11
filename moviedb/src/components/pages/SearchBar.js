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
                id="search__field"
                onChange={inputHandler}
                variant="filled"
                fullWidth
                label="Search"
                size="small"
                color="success"
            />
            <List input={inputText} />
        </>
    );
}

export default SearchBar;