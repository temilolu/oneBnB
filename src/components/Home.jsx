import React from 'react';
import Header from './Header';
import Search from './Search';
import List from './List';

const Home = () => (
    <div>
        <Header />

        <div className="banner m-b-25">
            <div className="container p-t-75 p-l-75">

                <h2>Book Unique homes in key locations around the world</h2>
                <Search />
            </div>

        </div>

        <main className="container">
            <div className="listings m-b-25">
                <h3>Explore OneBnB Homes</h3>
                <List />

            </div>

            <div className="host m-b-25">
                <h3>Become a Host and earn more</h3>
                <p>Turn your extra spacing into a source of pride</p>

            </div>


        </main>



    </div>
);

export default Home;