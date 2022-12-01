import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: black;
  cursor: pointer;
  font-weight: 500;
  color:white;

  &:hover {
    background-color: #f8f4f4;
    opacity:0.7;
  }
`;
const Select = styled.select`
    padding:15px;
    margin-top:40px;
    margin-left:100px;
    width:50%;
    display:flex;
    justify-content:center;
    align-content:center;
`
const Option = styled.option``
const Logo = styled.h1`
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-content:center;
    ${mobile({ fontSize: "20px" })}
`;
const Text = styled.div`
font-size:25px;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
margin:auto;

`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const [popup, setPop] = useState(false)
  const handleClickOpen = () => {
    setPop(!popup)
  }
  const closePopup = () => {
    setPop(false)
  }

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
    setPop(false)
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>Rs {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <div>
              <Button onClick={handleClickOpen}>Rent</Button>
              <div>
                {
                  popup ?
                    <div style={styles.main} className="main">
                      <div style={styles.popup} className="popup">
                        <div className="header">
                          <h2 style={{ cursor: "pointer" }} onClick={closePopup}>X</h2>
                          <Link to='/' style={{ textDecoration: 'none', color: 'Maroon', cursor: 'pointer' }}>
                            <Logo>
                              attHire.
                            </Logo>
                          </Link><br />
                          <Text>For how many days you want to rent this cloth? </Text>
                          <Select>
                            <Option disabled selected>
                              DAYS
                            </Option>
                            <Option>1</Option>
                            <Option>2</Option>
                            <Option>3</Option>

                            <Option>4</Option>
                            <Option>5</Option>
                            <Option>6</Option>
                            <Option>7</Option>
                            <Option>8</Option>
                            <Option>9</Option>
                            <Option>10</Option>

                          </Select>
                          <br /><br /><br />
                          <Button style={{
                            width: "40%",
                            border: "none",
                            padding: "15px 20px",
                            backgroundColor: "black",
                            color: "white",
                            cursor: "pointer",
                            marginLeft: "150px"
                          }} onClick={handleClick} >ADD TO CART</Button>

                        </div>

                      </div>
                    </div> : ""
                }
              </div>
            </div>
            {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}
const styles = {
  main: {
    backgroundColor: "rgba(39, 145, 216,0.710)",
    height: "100vh",
    width: "100%",
    position: "absolute",
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: "0",
    bottom: "0",

  },
  popup: {
    height: "400px",
    width: "50%",
    backgroundColor: "white",
    position: "absolute",
    top: "25%",
    textAlign: 'right',

    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    right: "25%",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 30px 0 15px",
    borderBottom: "2px solid black",
  }
};


export default Product;













