import React from 'react';
import Header from './Header';
import Search from './Search';
import List from './List';
import Explore from './Explore';

const Home = () => (
    <div>
        <Header />

        <div className="banner m-b-25">
            <div className="banner__overlay">
                <div className="container p-t-75">

                    <div className="col-9">
                        <h1>Book Unique homes in key locations around the world</h1>
                        <Search />
                    </div>

                </div>
            </div>

        </div>

        <main className="container">
            <div className="listings m-b-25">
                <h3>Explore 1BnB.</h3>
                <div className="row">
                    <div className="col-3">
                        <Explore />
                    </div>

                    <div className="col-3">
                        <Explore />
                    </div>
                </div>



                <h3>Homes around the world</h3>
                <div className="row">
                    <div className="col-3">
                        <List />
                    </div>

                </div>






            </div>

            <div className="row">
                <div className="col">
                    <div className="host  m-b-25" />
                </div>
                <div className="col">
                    <div className=" p-t-25">

                        <h3>Find out how much you could earn hosting your place</h3>
                        <p>Turn your extra spacing into a source of pride</p>
                        <button className="button__pink">Find out more</button>

                    </div>
                </div>
            </div>



        </main>



    </div>
);

export default Home;