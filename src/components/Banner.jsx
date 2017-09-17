import React, {Component} from 'react';
import Search from './Search';


const Banner = () => {
    return(
        <section className="banner" >
            <div className="container">
                <div className="row">
                    <div className="col-md-9 header-top">
                        <h1>OneBnB</h1>
                        <h3>Book unique Africa homes and experience it cities like a local</h3>
                        <Search />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;