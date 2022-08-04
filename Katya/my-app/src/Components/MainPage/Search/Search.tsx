import { useRef } from "react";
import './Search.css'

const Search = () => {
    return (
        <form className="SearchFunction">
            <input className='search' type="search" placeholder='Search...' />
        </form>
    )
}

export default Search;

{/* <button className='search1'type="button"><img className="searchImage" src="icon-search.png"></img></button> */ }