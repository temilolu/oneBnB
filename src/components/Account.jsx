import React from 'react';
import Header from './Header';

const Account = () => (
    <div>

        <Header />

        <main className="container">
            <div className="row">
                <div className="m-t-70" />
                <div className="col-4">
                    <img src={'https://a0.muscache.com/im/pictures/user/8ff54849-a8e9-412d-a965-00e4ba9bbc48.jpg?aki_policy=profile_x_medium'} alt={'avatar'} />
                    <button className="button__green">List your Home</button>
                </div>

                <div className="col-8">
                    <div>
                        <h1>{'Hey, Im Temitayo Ogunlolu'}</h1>
                        <span>Location</span>
                    </div>

                    {/* History */}
                    <div />
                </div>
            </div>
        </main>
    </div>
);

export default Account;