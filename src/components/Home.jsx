import React from 'react';
import Header from './Header';
import Search from './Search';
import List from './List';

const Home = () => (
    <div>
        <Header />


        <div className="banner">
            <h1>OneBnB img</h1>
            <h2>Book Unique homes around the world</h2>
            <Search />
        </div>


        <div className="Listings">
            <h3>Explore OneBnB Homes</h3>
            <List />

        </div>

        <div className="Host">
            <h3>Become a Host and earn more</h3>
            <p>Turn your extra spacing into a source of pride</p>

        </div>
    </div>
);

export default Home;