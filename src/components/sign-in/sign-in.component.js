import React from 'react';

import './sign-in.styles.scss';

import { Form, Button } from 'react-bootstrap';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const { email, password} = this.state;
        try{
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password: ''});
        } catch(error){
            console.log(error)
        }
        
        
    }
    handleChange = (e)=>{
        const {name , value} = e.target;
        this.setState({ [name]:value })
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span><hr/>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={this.handleChange} value={this.state.password} required placeholder="Password" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Sign In</Button>
                    <Button className="ml-2" variant="primary" onClick={signInWithGoogle} >Sign In with Google</Button>
                </Form>
            </div>
        )
    }
}
export default SignIn;