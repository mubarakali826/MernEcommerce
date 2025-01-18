import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/cg';
import MetaData from '../layout/MetaData';
import "./Home.css";
import ProductCard from './ProductCard';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from "react-alert";
import { Link } from 'react-router-dom';

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {
        loading ? 
          <Loader /> 
          : (
            <Fragment>
              <MetaData title="E-COMMERCE" />
              <div className="banner">
                <p>Welcome to Luxe Look</p>
                <h1>FIND AMAZING PRODUCTS BELOW</h1>
                <a href="#container">
                  <button>
                    Scroll <CgMouse />
                  </button>
                </a>
                {/* Login/Signup Button */}
                <div className="auth-buttons">
                  <Link to="/login">
                    <button className="login-signup-btn">Login / Signup</button>
                  </Link>
                </div>
              </div>
              <h2 className="homeHeading">Featured Products</h2>
              <div className="container" id="container">
                {
                  products && products.map(product => (
                    <ProductCard product={product} key={product._id} />
                  ))
                }
              </div>
            </Fragment>
          )
      }
    </Fragment>
  );
};

export default Home;
