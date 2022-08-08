import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../store/singleProduct";
import { addToCart } from '../store/cart'

class SingleProduct extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }
  handleAdd() {
    this.props.addToCart(this.props.product)
    alert('item added to cart')
  }

  render() {
    const { name, imageURL, price, description, category } = this.props.product;
    return (
      <div>
        <section className="s-product-name">
          <h1>{name}</h1>
        </section>

        <div className="s-product-main">
          <div className="s-product-main-box">
            <img src={imageURL} className="s-product-img" />
          </div>
          <div className="s-product-main-description">
            <p className="s-product-detail name">{name}</p>
            <p className="s-product-detail price">${price / 100}</p>
            <p className="s-product-detail description">{description}</p>
            {/* <p className="s-product-detail description">In Stock: {inventory}</p> */}

            <button className="button" onClick={() => this.handleAdd()}>
              Add to Cart
            </button>
            <p className="s-product-detail category">Tags: {category}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  product: state.singleProduct,
});

const mapDispatch = (dispatch) => ({
  getSingleProduct: (id) => dispatch(fetchProduct(id)),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapState, mapDispatch)(SingleProduct);
