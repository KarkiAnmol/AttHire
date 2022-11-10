
import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";
const product={
  name: "Lehenga",
  images: [{url:"https://assets.vogue.in/photos/5f6c7a4c10dbc0617e889b18/2:3/w_597,h_895,c_limit/Shraddha%20Kapoor%20in%20Falguni%20Shane%20Peacock%20lehenga%20from%20India%20Couture%20Week%202020.jpg"}],
  price:"MRP 9000",
  _id:"Anmol",
}

const Home = () => {
  // const alert = useAlert();
  // const dispatch = useDispatch();
  // const { loading, error, products } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getProduct());
  // }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="AttHire" />

//           <div className="banner">
//             <p>Welcome to Ecommerce</p>
//             <h1>FIND AMAZING PRODUCTS BELOW</h1>

//             <a href="#container">
//               <button>
//                 Scroll <CgMouse />
//               </button>
//             </a>
//           </div>

//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <Product key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };
  return (
   
        <Fragment>
          <MetaData title="AttHire" />

          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>
           <Product product={product}/>

          </div>
        </Fragment>
      );
    };
  
export default Home;
