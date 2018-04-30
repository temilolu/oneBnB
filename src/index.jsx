import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Listing from './components/Listing';
import View from './components/View';
import Account from './components/Account';


const err = () => <h1>404 error</h1>;

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/listing' component={Listing} />
                <Route path='/view' component={View} />
                <Route path='/account' component={Account} />
                <Route component={err} />
            </Switch>
        </BrowserRouter>
    )
};

render(<App />, document.getElementById('root'));

