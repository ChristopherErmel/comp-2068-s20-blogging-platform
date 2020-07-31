import React from 'react';
import Routes from './Routes';
import Nav from './shared/Nav';

//yarn add axios 
//import axios
// import Axios from 'axios';

function App() {
  //this will test our proxys. Need axios for this!
  // const resp = Axios.get('/test').then(resp => {
  //   console.log(resp.data.message);
  // });

  return (
    //fragment is used to encampsulate...
    <React.Fragment>
      <Nav/>
      <Routes/>
    </React.Fragment>
  );
}

export default App;



// create-react-app client //will create a react client folder in dir. use in root dir of solution. 
// yarn add react-bootstrap
// yarn add bootstrap
// yarn add react-router-dom










