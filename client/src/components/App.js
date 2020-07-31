import React, {useState} from 'react';
import Routes from './Routes';
import Nav from './shared/Nav';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//yarn add axios 
//import axios
// import Axios from 'axios';

function App() {

  const [user, setUser] = useState(false);



  //this will test our proxys. Need axios for this!
  // const resp = Axios.get('/test').then(resp => {
  //   console.log(resp.data.message);
  // });

  return (
    //fragment is used to encampsulate...
    <React.Fragment>
      <ToastContainer/>
      <Nav/>
      <Routes setUser={setUser}/>
    </React.Fragment>
  );
}

export default App;



// create-react-app client //will create a react client folder in dir. use in root dir of solution. 
// yarn add react-bootstrap
// yarn add bootstrap
// yarn add react-router-dom










