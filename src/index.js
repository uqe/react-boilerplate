import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('app'));

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
