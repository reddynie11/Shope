import React from 'react';


import { Form, Button } from 'react-bootstrap';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super()

        this.state={
            displayName: '',
            email:'',
            password:'',
            confirmPassword: ''
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password does not match")
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName})
            this.setState({
                displayName: '',
                email:'',
                password:'',
                confirmPassword: ''
            })

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
                <h2>Do not have an Account</h2>
                <span>Sign Up with your email and password</span><hr/>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicDisplayName">
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control name="displayName" type="text" onChange={this.handleChange} value={this.state.displayName} placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" onChange={this.handleChange} value={this.state.password} required placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="confirmPassword" type="password" onChange={this.handleChange} value={this.state.confirmPassword} required placeholder="Password" />
                    </Form.Group>

                    <Button variant="dark" type="submit">Sign In</Button>
                </Form>
            </div>
        )
    }
}
export default SignUp;