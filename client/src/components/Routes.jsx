import React from "react";
//switch interprits out path, looks at path and loads the components
//route provieds the returns and such, usualy need path and component
import {Route, Switch} from "react-router-dom";

//imports the components we want to use for routes
import Home from './pages/Home';
import About from './pages/About';
import Login from './sessions/Login';

import Blogs from './blogs/Index';
import NewBlog from './blogs/New';

//routes component
//the routes is a component!
//add props to store the properties
function Routes({setUser}){
    return(
        <Switch>
            {/* path is what the path will be, home is the component to load */}
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            {/* <Route exact path="/login" component={Login}/> */}
            <Route exact path="/login" render={
                renderProps => <Login
                {...renderProps}
                setUser={setUser}
                />
            }/>
            <Route exact path="/blogs" component={Blogs}/>
            <Route exact path="/blogs/new" component={NewBlog}/>
        </Switch>
    );
};

//export the routes
export default Routes;