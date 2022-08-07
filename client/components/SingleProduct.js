import React from "react";
import {connect} from 'react-redux';
import { fetchProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  render() {
    const { name, imageURL, price, description, category, inventory } = this.props.product
    console.log('PROPS',this.props)
    return (
      <div className="s-product-container">
        <section className="s-product-name">
          <h1>{name}</h1>
        </section>

        <div className="s-product-main">
          <div className="s-product-main-box">
            <img src={imageURL} className="s-product-img"/>
          </div>
          <div className="s-product-main-description">
            <p className="s-product-detail name">{name}</p>
            <p className="s-product-detail price">${price / 100}</p>
            <p className="s-product-detail description">{description}</p>
            {/* <p className="s-product-detail description">In Stock: {inventory}</p> */}
            <button>Add To Cart</button>
            <p className="s-product-detail category">Tags: {category}</p>
          </div>
        </div>

        
        {/* Possibly for DESCRIPTION/REVIEW on bottom if time
        <div className="s-product-description">

        
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);