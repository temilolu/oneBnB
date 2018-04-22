import React from 'react';

const View = () => (
    <section>
        <div className='col-12'>Pictures</div>

        <div className='row'>
            <div className='col-8'>
                <div>
                    <h2>Title</h2>
                    <span>Location</span>
                    <p>Description</p>
                </div>
            </div>
            <div className='col-4'>
                <div>
                    <h3>Price per night</h3>

                    <div>Date</div>
                    <div>Guest</div>
                    <div>Request to book</div>
                </div>
            </div>
        </div>


    </section>
);

export default View;