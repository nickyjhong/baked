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
    const { product } = this.props 
    // const { id, name, imageURL, price, description, category } = this.props.product;
    // const displayPrice = parseFloat(product.price / 100).toFixed(2) 
    return (
      <div>
        {product && product.id ? (
          <div>
            <section className="s-product-name">
              <h1>{product.name}</h1>
            </section>

            <div className="s-product-main">
              <div className="s-product-main-box">
                <img src={product.imageURL} className="s-product-img" />
              </div>
              <div className="s-product-main-description">
                {/* <p className="s-product-detail-name">{product.name}</p> */}
                <p className="s-product-detail-price">${parseFloat(product.price / 100).toFixed(2)}</p>
                <p className="s-product-detail-description">{product.description}</p>
                {/* <p className="s-product-detail description">In Stock: {inventory}</p> */}

                <button className="add-to-cart-btn" onClick={() => this.handleAdd()}>
                  Add to Cart
                </button>
                <p className="s-product-detail category">Tags: {product.category}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>This product does not exist!</h1>
          </div>
        )}
        
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
