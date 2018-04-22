import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';


function App() {
    return (
        <div>
            <Home />


            <div>
                <p>© 2018. This was inspired by AirBnB for learning purpose only. You can learn more about me on Temitayo.me</p>
            </div>
        </div>
    )
};

render(<App />, document.getElementById('root'));

