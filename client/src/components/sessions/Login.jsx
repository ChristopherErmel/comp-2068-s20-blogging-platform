import React from 'react';
import Axios from 'axios';
import {useState} from 'react';
import {Form, Container} from 'react-bootstrap';

// Button, FormControl


function Login () {

    //creating objexcts
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    //stop the form from subbmitting
    //stop the default operation... which is to submit the data
    const handleSubmit = async event => {
        //stops the default
        event.preventDefault();
        //where u want to go 'authenticate', and then the data as an object 'inputs'
        const resp = await Axios.post('/authenticate', inputs);
        console.log(resp);
    };

    const handleInputChange = async event => {
        //this will make the data persistin for copying over data...
        event.persist();

        //to grab data on input
        const {name, value} = event.target;

        //obj = {};
        //obj.prop = "bob";
        //obj['prop'] = "bob";
        //name = "prop";
        //obj[name] = "Bob";
        //below will transfer the data to inputs
        //by copying over ...inputs propertys and adds to them
        //if there is already a value of the same it will overwrite it
        //shallow merge, use inputs => ({...inputs, ewofn, wfn}) to add values
        setInputs(inputs => ({...inputs, [name]: value}));

    }


    return (
        <Container className="my-5">
            <header>
                <h1>LOGIN</h1>
            </header>
            <hr />
                <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <label htmlFor="email">Email:</label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" className="form-control" value={inputs.email}/>
                </Form.Group>
                <Form.Group>
                    <label htmlFor="password">Password:</label>
                    <Form.Control type="password" onChange={handleInputChange} name="password" className="form-control" value={inputs.password}/>
                </Form.Group>
                <Form.Group>
                    <button className="btn btn-primary">Submit</button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;