import React, { useState } from "react";
import { debounce } from "../../helpers/debounce";
import { SearchContainer, TextArea } from "../../styles/searchBox";
import SearchIcon from "./SearchIcon";
import { ISearchBox } from "./types";

const SearchBox = ({ onSearch, label = "Search" }: ISearchBox) => {
    const [value, setValue] = useState("");
    const handleSearch = debounce(onSearch, 500);
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const searchValue = event.target?.value;
        setValue(searchValue);
        handleSearch(searchValue);
    };

    return (
        <SearchContainer>
            <TextArea
                value={value}
                onChange={handleChange}
                placeholder={label}
                autoFocus
                data-testid="search-box"
            />
            <SearchIcon />
        </SearchContainer>
    );
};

export default SearchBox;
