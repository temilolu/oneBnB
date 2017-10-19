import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './main.css';

const renderApp = () => {
  render(<App />, document.getElementById('root'));
};

renderApp();
