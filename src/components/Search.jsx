import React from 'react';

const Search = () => (
    <form className="search search__has__svg">
        <img className="p-r-15" src={'http://res.cloudinary.com/djh2j7sra/image/upload/v1524965903/magnifying-glass_2_a5n11f.svg'} alt={"search"} />
        <input type="text" placeholder="Try Lagos" />
        <button className="button__pink button__large">Search</button>
    </form>
);

export default Search;