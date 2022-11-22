import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:#f1f1f1;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
    display:flex;
    
    justify-content:center;
    align-items:center;

`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px
`
const Agreement = styled.span`
    font-size:12px;
    margin:20px 0px;
`
const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
`
const Logo = styled.h1`
    font-weight:bold;
    display:flex;
    
    justify-content:center;
    align-items:center;
    ${mobile({fontSize:"20px"})}
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title><br/>
            <Link to ='/' style ={{textDecoration:'none' ,color:'Maroon',cursor:'pointer'}}>
                <Logo>
                                    attHire.
                </Logo>
                </Link>
                <br/><br/>
            <p>Already have an account? <Link to ='/Login' style = {{color:'black',cursor:'pointer'}}>Login
     </Link></p>
            <Form action='http://localhost:5000/api/auth/register' method='post'>
                <Input placeholder = "First Name" type='text' name='firstname'></Input>
                <Input placeholder = "Last Name" type='text' name='lastname'></Input>
                <Input placeholder = "Username" type='text' name='username'></Input>
                <Input placeholder = "Email" type='Email' name='email'></Input>
                <Input placeholder = "Password" type='Password' name='password'></Input>
                <Input placeholder = "Confirm Password" type='text' name='confirmpassword'></Input>
                <Agreement>By creating an account, you agree to Atthire's <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
            
        </Wrapper>
    </Container>
    
  )
}

export default Register
