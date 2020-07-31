import React from 'react';
import Routes from './Routes';
import Nav from './shared/Nav';

function App() {
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










