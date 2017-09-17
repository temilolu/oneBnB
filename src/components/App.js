import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import logo from '../logo.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
            <Switch>
                <Route exact path='/' component={Landing}/>
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
