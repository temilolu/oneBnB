import React from 'react';
import Header from './Header';
import List from './List';
import Search from './Search';
import Filter from './Filter';
import Maps from './Maps';

const Listing = () => (
    <div>
        <Header />
        <main className="container">
            <div className="row">
                <div className="col">
                    <Search />
                </div>
                <div className="col">
                    <Filter />
                </div>
            </div>

            <div className="m-t-25" />
            <div className="row">
                <div className="col-8">
                    <h3>{300}+ Homes</h3>
                    <div className="row">
                        <div className="col-6">
                            <List />
                        </div>

                        <div className="col-6">
                            <List />
                        </div>

                        <div className="col-6">
                            <List />
                        </div>


                    </div>

                </div>
                <div className="col-4">
                    <Maps />
                </div>
            </div>


        </main>
    </div>
);

export default Listing;