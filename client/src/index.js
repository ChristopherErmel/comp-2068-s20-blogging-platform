import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import the router
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);




// create-react-app client //will create a react client folder in dir. use in root dir of solution. 
// yarn add react-bootstrap
// yarn add bootstrap
// yarn add react-router-dom