import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import { addToCart } from '../store/cart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class SingleProduct extends Component {
  constructor() {
    super();
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }
  handleAdd() {
    this.props.addToCart(this.props.product);
    toast('Added to cart');
  }

  render() {
    const { product } = this.props;
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
                <p className="s-product-detail-price">
                  ${parseFloat(product.price / 100).toFixed(2)}
                </p>
                <p className="s-product-detail-description">
                  {product.description}
                </p>

                <button
                  className="add-to-cart-btn"
                  onClick={() => this.handleAdd()}
                >
                  Add to Cart
                </button>
                <p className="s-product-detail category">
                  Tags: {product.category}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="nfp-single-product">
            <p className="nfp-info">We're not done baking that yet</p>
            <p className="nfp-info">Check back soon!</p>
            <p className="nfp-directions">Click the cake to go back to home</p>
            <Link to='/'>
              <img src={'/icon.png'} className="nfp-icon" />
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(fetchProduct(id)),
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
