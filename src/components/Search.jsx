import React, { Component } from 'react';
const Search = () => {
  return (
    <div className="search">
      <form className="row" method="get">
        <div className=" search--slot col-md-3">
          <label for="Where">
            <i className="fa fa-map-marker" aria-hidden="true" /> Where
          </label>
          <br />
          <input type="text" placeholder="Place" />
        </div>

        <div className="search--slot col-md-3">
          <label for="when">
            <i className="fa fa-calendar" aria-hidden="true" /> When
          </label>
          <br />
          <input type="text" placeholder="Set Date" />
        </div>

        <div className="search--slot col-md-3">
          <label for="Guest">
            <i className="fa fa-user" aria-hidden="true" /> Guest
          </label>
          <br />
          <input type="text" placeholder="Guest" />
        </div>

        <div className="search--btn col-md-3">
          <button type="submit" className="button--large button--orange">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
