import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Seller from "./pages/Seller";
import Sell from "./pages/Sell";
import Hire from "./pages/Hire";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  var Checkuser=null;

  if (user===null) {
    
  }
  else{
    Checkuser=user.isAdmin
  }
  // console.log(user.isAdmin)
  // const userCheck = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/productlist">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          {user ? <Redirect to="/cart" /> : <Login />}
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route> */}
        {/* <Route path='/Seller'element={<Seller/>}/>
      <Route path='/Sell' element ={<Sell/>}/>
      <Route path='/Hire' element={<Hire/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>
      <Route path='/Terms' element={<Terms/>}/> */}
      <Route path="/Seller">
          <Seller />
        </Route>

        
        <Route path="/sell">{Checkuser===false?<Redirect to="/" />:<Sell/>}
        </Route>
        <Route path="/hire">{Checkuser===false?<Redirect to="/" />:<Hire/>}
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
