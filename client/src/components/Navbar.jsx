import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined, ArrowDropDownOutlined, AccountCircleRounded } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import{useSelector} from 'react-redux'
const Container = styled.div`
    height:60px;
    
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display :flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
    flex:0.5;
    display:flex;
    align-item:center;
`;
const Language = styled.span`
    font-size:15px;
    font-family: 'Montserrat', sans-serif;
    cursor:pointer;
    margin-right:15px;
    margin-top:10px;
    color:black;
    align-item:center;
    ${mobile({ display: "none" })}
`;
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({ fontSize: "20px" })}
`;
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display:flex;
    height:20px;
    align-item:center;
    justify-content:center;
    margin-left:25px;
    border-radius:15px;
    padding :5px;
    width:100%;
    
`;
const Input = styled.input`
    border:none;
    outline:none;
    width:100%; 
    ${mobile({ width: "50px" })}
// `;
 const MFH = styled.div`
     display:flex;
     text-align:center;
     padding:0px 2px;
     justify-content:space-between;
     ${mobile({ display: "none" })}
 `;
const Center = styled.div`
    flex:1;
    text-align:center;
`;

const Right = styled.div`
    flex:1;
    display :flex;
    align-item:center;
    justify-content :flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:15px;
    margin-right:10px;
    ${mobile({ fontSize: "12px", marginLeft: "5px", marginRight: "5px" })}
`;
const Button = styled.button`
width:100%;
border:none;
border-radius:5px;
padding:15px 20px;
background-color:black;
color:white;
cursor:pointer;
margin-bottom:10px;
`;
const Navbar = () => {
    const quantity= useSelector(state=>state.cart.quantity)
    console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN
                        <ArrowDropDownOutlined style={{ fontSize: 20, display: "flex", alignConter: "center", justifyContent: "center" }} />
                    </Language>
                    <Link to='/' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                        <Logo>
                            attHire.
                        </Logo>
                    </Link>
                    </Left>
                    <MFH>
                    <Link to='/productlist' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                        <Logo>
                            <button style={{ border: "none", background: "white", fontSize: 14, cursor: "pointer", paddingRight: "5px" }}>MALE</button>

                        </Logo>
                    </Link>
                    <Link to='/productlist' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                        <Logo>
                            <button style={{ border: "none", background: "white", fontSize: 14, cursor: "pointer", paddingRight: "5px" }}>FEMALE</button>

                        </Logo>
                    </Link>
                    <Link to='/productlist' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                        <Logo>
                            <button style={{ border: "none", background: "white", fontSize: 14, cursor: "pointer", paddingRight: "5px" }}>KIDS</button>

                        </Logo>
                    </Link>
                    <Link to='/productlist' style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                        <Logo>
                            <button style={{ border: "none", background: "white", fontSize: 14, fontWeight: 600, cursor: "pointer", padding: "5px" }}>TRENDING</button>
                        </Logo>
                    </Link>
                    </MFH>
                <Center>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Link to='/' style={{ color: 'black', cursor: 'pointer' }}>
                            <Search style={{ color: "gray", fontSize: 20, alignItem: Center }} />
                        </Link>
                    </SearchContainer>
                </Center>
                <Right>
                    <Link to='/Seller' style={{ color: 'black', cursor: 'pointer' }}><Button>Become a seller</Button></Link>
                    <Link to='/Login' style={{ color: 'black', cursor: 'pointer' }}>
                        <MenuItem>
                            <AccountCircleRounded />
                        </MenuItem>
                    </Link>
                    <Link to='/Cart' style={{ color: 'black', cursor: 'pointer' }}>
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
