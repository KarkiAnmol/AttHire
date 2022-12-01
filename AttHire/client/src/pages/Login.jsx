// import React from 'react'
// import styled from 'styled-components'
// import { mobile } from '../responsive'
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { login } from '../redux/apiCalls';
// import{useDispatch, useSelector} from "react-redux"


// const Error=styled.span`
//   color:red;
// `
// const Container = styled.div`
//     width:100vw;
//     height:100vh;
//     background-color:#f1f1f1;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `
// const Wrapper = styled.div`
//     width:30%;
//     padding:20px;
//     background-color:white;
//     ${mobile({ width: "75%" })}
// `
// const Title = styled.h1`
//     font-size:24px;
//     font-weight:300;
//     font-weight:bold;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `

// const Form = styled.form`
//     display:flex;
//     flex-direction:column;
// `
// const Input = styled.input`
//     flex:1;
//     min-width:40%;
//     margin:10px 0px;
//     padding:10px
// `

// const Button = styled.button`
//     width:40%;
//     border:none;
//     padding:15px 20px;
//     background-color:black;
//     color:white;
//     cursor:pointer;
//     margin-bottom:10px;
//     &: disabled{
//       color:green;
//       cursor:not-allowed;
//     }
// `
// const Logo = styled.h1`
//     font-weight:bold;
//     display:flex;

//     justify-content:center;
//     align-items:center;
//     ${mobile({ fontSize: "20px" })}
// `;


// // const Link = styled.a`
// //     margin:5px 0px;
// //     font-size:12;
// //     color:gray;
// // `
// const Login = () => {
//   const [username,setUsername]=useState("")
//   const [password,setPassword]=useState("")
//   const dispatch =useDispatch()
//   const {isFetching, error} =useSelector((state)=>state.user)
//   const handleClick=(e)=>{
//     e.preventDefult()
//     login(dispatch,{username,password})
//   }
//   return (

//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <br />
//         <Link to='/' style={{ textDecoration: 'none', color: 'Maroon', cursor: 'pointer' }}>
//           <Logo>
//             attHire.
//           </Logo>
//         </Link>
//         <br />
//         <Form>
//           <h4>Username</h4>
//           <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></Input>
//           <br />
//           <h4>Password</h4>
//           <Input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></Input>
//           <p> <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
//           {error && <Error>Something went wrong...</Error>}
//             <Link to="/forgotPassword">
//               <h4 style={{ marginBottom: "5%", fontWeight: "bold", color: 'black', cursor: 'pointer' }}>
//                 Forgot password?
//               </h4>

//             </Link>
//           </p>
//           {/* <Link style = {{cursor:'pointer'}}>Forgotten your Password?</Link> */}
//           <p> Not a Member? <Link to='/Register' style={{ color: 'black', cursor: 'pointer' }}>Join Us.
//           </Link> </p>

//         </Form>

//       </Wrapper>
//     </Container>

//   )
// }

// export default Login


import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Container = styled.div`
  width:100vw;
  height:100vh;
  background-color:#f1f1f1;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Wrapper = styled.div`
  width:30%;
  padding:20px;
  background-color:white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size:24px;
  font-weight:300;
  font-weight:bold;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin:10px 0px;
  padding:10px
`;

const Button = styled.button`
width:40%;
  border:none;
  padding:15px 20px;
  background-color:black;
  color:white;
  cursor:pointer;
  margin-bottom:10px;
  &: disabled{
    color:green;
    cursor:not-allowed;
  }
`;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 20px;
//   text-decoration: underline;
//   cursor: pointer;
// `;
const Logo = styled.h1`
    font-weight:bold;
    display:flex;
    
    justify-content:center;
    align-items:center;
    ${mobile({fontSize:"20px"})}
`;



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <br></br>
        <Link to ='/' style ={{textDecoration:'none' ,color:'Maroon',cursor:'pointer'}}>
                <Logo>
                                    attHire.
                </Logo>
                </Link>
        <Form> 
          <h4>Email</h4>
          <Input
            placeholder="Username or Email"
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
           <h4>Password</h4>
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          <Link to="/forgotPassword">
                <h4 style={{ marginBottom: "5%", fontWeight: "bold",color:'black',cursor:'pointer' }}>
                  Forgot password?
                </h4></Link>
          <p> Not a Member? <Link to ='/Register' style = {{color:'black',cursor:'pointer'}}>Join Us.
     </Link> </p>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

// import React ,{useState} from 'react'
// import styled from 'styled-components'
// import { mobile } from '../responsive'
// import {Link,useHistory} from 'react-router-dom';


// const Container = styled.div`
//     width:100vw;
//     height:100vh;
//     background-color:#f1f1f1;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `
// const Wrapper = styled.div`
//     width:30%;
//     padding:20px;
//     background-color:white;
//     ${mobile({width:"75%"})}
// `
// const Title = styled.h1`
//     font-size:24px;
//     font-weight:300;
//     font-weight:bold;
//     display:flex;
//     align-items:center;
//     justify-content:center;
// `

// const Form = styled.form`
//     display:flex;
//     flex-direction:column;
// `
// const Input = styled.input`
//     flex:1;
//     min-width:40%;
//     margin:10px 0px;
//     padding:10px
// `

// const Button = styled.button`
//     width:40%;
//     border:none;
//     padding:15px 20px;
//     background-color:black;
//     color:white;
//     cursor:pointer;
//     margin-bottom:10px;
// `
// const Logo = styled.h1`
//     font-weight:bold;
//     display:flex;
    
//     justify-content:center;
//     align-items:center;
//     ${mobile({fontSize:"20px"})}
// `;


// // const Link = styled.a`
// //     margin:5px 0px;
// //     font-size:12;
// //     color:gray;
// // `
// const Login = () => {

//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');
//   const history=useHistory()

//   const loginuser=async(e)=>{
//     e.preventDefault();
//     const res= await fetch('http://localhost:5000/api/auth/login',{
//       method:"POST",
//       body:JSON.stringify({
//         email,password
//       })
//     })
//     const data=res.json()
//     if (!data) {
//       window.alert("invalid credentials")
//     }
//     else{
//       history.push("/")
//     }
//   }
//   return (
    
//     <Container>
//         <Wrapper>
//             <Title>SIGN IN</Title>
//             <br/> 
//             <Link to ='/' style ={{textDecoration:'none' ,color:'Maroon',cursor:'pointer'}}>
//                 <Logo>
//                                     attHire.
//                 </Logo>
//                 </Link>
// <br/>
//             <Form method="POST">
//               <h4>Email</h4>
//                 <Input 
//                 placeholder = "Username or Email" 
//                 value={email}
//                 onChange={(e)=>setEmail(e.target.value)}
                
//                 ></Input>
//                 <br/>
//                 <h4>Password</h4>
//                 <Input 
//                 placeholder = "Password"
//                 value={password}
//                 onChange={(e)=>setPassword(e.target.value)}
                
//                 ></Input>
//                <p> <Button onClick={loginuser}>LOG IN</Button>
//                 <Link to="/forgotPassword">
//                 <h4 style={{ marginBottom: "5%", fontWeight: "bold",color:'black',cursor:'pointer' }}>
//                   Forgot password?
//                 </h4>
                
//               </Link>
//               </p>
//                 {/* <Link style = {{cursor:'pointer'}}>Forgotten your Password?</Link> */}
//               <p> Not a Member? <Link to ='/Register' style = {{color:'black',cursor:'pointer'}}>Join Us.
//      </Link> </p>
     
//             </Form>
            
//         </Wrapper>
//     </Container>
   
//   )
// }

// export default Login

