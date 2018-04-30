import React from 'react';
import Header from './Header';
import List from './List';

const View = () => (
    <div className="view">
        <Header />

        <main className="container">
            <div className="row">
                <div className="col-12">
                    <div className="view__pictures" />
                </div>



                <div className="col-8">
                    <div className="m-t-25" />
                    <div className="view__content">
                        <h3>Title</h3>
                        <span>Location</span>

                        {/* Description */}
                        <div>
                            <h4>Description</h4>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ligula congue, tristique nulla eget, pellentesque ante
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ligula congue, tristique nulla eget, pellentesque ante
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ligula congue, tristique nulla eget, pellentesque ante</p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="m-t-25" />
                    <div className="view__checkout">
                        <h4>Pricing per night</h4>
                        <hr />

                        {/* Set date */}
                        <div>
                            <span>Date</span>
                        </div>

                        {/* Guess */}
                        <div>
                            <span>Guest</span>
                        </div>

                        {/* Request button */}
                        <div>
                            <button className="button__green">Request to book</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="m-t-70" />
            {/* Similar listing */}
            <h2>Similar Listing</h2>

            <div className="row">

                <div className="col-4">
                    <List />
                </div>

                <div className="col-4">
                    <List />
                </div>

                <div className="col-4">
                    <List />
                </div>
            </div>
        </main>
    </div>

);

export default View;