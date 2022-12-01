import Footer from '../components/Footer'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import BottomFooter from '../components/BottomFooter'
import React  from 'react'
import { mobile } from '../responsive'
import {Link} from 'react-router-dom'
const Container = styled.div`

`

const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding:"10px"})}
`
const Title =styled.div`
font-size: 50px;
margin: 1px 1px;
padding : 15px
font-weight:600;
text-align:center;
`
const Rent =styled.div`
font-weight:200;
font-size: 30px;
text-align:center;

`;
const Button = styled.button`
    width:15%;
    border:none;
    padding:15px 20px;
    background-color:black;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
    margin-right:20px;
   
`
const Are =styled.div`
font-weight:500;
font-size: 35px;
text-align:center;
`;

const Seller =() =>
{
//   const user = useSelector((state) => state.user.currentUser);

    return (
        <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <Title >"Dress to Express"</Title><br/><br/>
        <Are> Are you worried of buying new dress for one Occasion?</Are><br/><br/>
        <Rent> Here! you can get a dress as per your wish and rent it for some days and return after it's use only on 10% rent per day of cost price.<br/> <br/>You can Rent or Sell  your unused cloths to other people and earn money. <br/><br/><br/>
        <Link to ='/sell'style={{color:'black',cursor:'pointer'}}><Button>SELL</Button> </Link> 
        <Link to ='/Hire'style={{color:'black',cursor:'pointer'}}><Button>HIRE</Button> </Link>
         </Rent>
        </Wrapper>
       <Newsletter/>
      <Footer/>
    <BottomFooter/>
    </Container>
    )
}
export default Seller
