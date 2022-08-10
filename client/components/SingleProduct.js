import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../store/singleProduct';
import { addToCart } from '../store/cart';

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
    alert('item added to cart');
  }

  render() {
    const { product } = this.props;
    // const { id, name, imageURL, price, description, category } = this.props.product;
    // const displayPrice = parseFloat(product.price / 100).toFixed(2)
    return (
      <div className="div-container">
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
                <p className="s-product-detail-price">
                  ${parseFloat(product.price / 100).toFixed(2)}
                </p>
                <p className="s-product-detail-description">
                  {product.description}
                </p>
                {/* <p className="s-product-detail description">In Stock: {inventory}</p> */}

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
          <div>
            {/* <img src={'https://images.unsplash.com/photo-1617108862436-b4678494f439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} /> */}
            <p style={{ textAlign: 'center' }}>
              We're not done baking that yet
            </p>
            <p style={{ textAlign: 'center' }}>Check back soon!</p>
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
