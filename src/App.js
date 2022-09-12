// import logo from './logo.svg';
import './App.css';
import img_logo from "./images/Logo.png";
import {Button ,Form , FormGroup ,Label , Input} from 'reactstrap';
import {FacebookLoginButton } from 'react-social-login-buttons';
import {GoogleLoginButton} from 'react-social-login-buttons';
function App() {
  return (
    <Form className="Login_form">
      <div className="text-center">
      <h1><span className='font-weight-bold'>ATTHIRE</span></h1>
      <img src ={img_logo} height={60}/></div>
       <p className='text-center'>Dress To Express</p>
       <FormGroup>
         <Label>Email</Label><br></br>
         <Input type ="Email" placeholder='Email'/>
         </FormGroup>
         <FormGroup>
         <Label>Password</Label><br></br>
         <Input type ="password" placeholder='Password'/>
         </FormGroup>
         <Button className="btn-lg  btn-dark">Log In </Button>
         <div className='text-center pt-3'>
           Or continue with your social account 
         </div>
        <FacebookLoginButton className='mt-3 mb-3'></FacebookLoginButton>
         <div className='text-center pt-3'>
           Or continue with your Google account 
         </div>
         <GoogleLoginButton className='mt-3 mb-3'/> 
         <div className='text-center'>
         <a href='/sign-up'>Sign Up</a>
         <span className='p-2'>|</span>
         <a href='/sign-up'>Forgot Password</a>
         </div>
    </Form> 
  );
}

export default App;
