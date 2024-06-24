import { useState } from "react";
import "./Search.styles.css";
import Input from "../../components/Form/Input/Input";
import Button from "../../components/Form/Button/Button";

const Search = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="search-page">
            <h1>Procurar resultado das horas</h1>
            <Input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
            />
            <Button isLink to="/home/search-results">
                Search
            </Button>
        </div>
    );
};

export default Search;
