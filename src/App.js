import React, { Component } from 'react';
import logo from './logo.svg';
import {database} from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.dataref = database.ref('/wo/lo/ha');
    database.ref('/').on('value', (snapshot) => {
     this.setState({
       data: snapshot.val()
     })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataref.push(this.state.newData);
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData: newData
    });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and firebase</h2>
        </div>
        <p className="App-intro">
         { JSON.stringify(this.state.data, null, 2)}
        </p>

        <form className="App-form" onSubmit={this.handleSubmit} >
          <input type="text"  value={this.state.newData} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
