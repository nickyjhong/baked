import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allProducts';

export class Shop extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    {
      console.log('props', this.props.products);
    }
    return (
      <section className="grid-section">
        Baked Goods
        <div className="grid-container">
          <div className="grid-section-left">
            <input className="category-search" placeholder="Search"></input>
            <p className="grid-section-left-category-bold">Categories</p>
            {/* <p>Cookies</p>
            <p>Cakes</p>
            <p>Pastries</p>
            <p>Doughnuts</p>
            <p>Cold Items</p> */}
            <ul>
              <li>Cakes</li>
              <li>Cookie</li>
              <li>Cupcake</li>
              <li>Mini</li>
              <li>Other</li>
            </ul>
          </div>
          <div className="grid-section-right">
            {this.props.products.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <div className="grid-item" key={product.id}>
                    <img
                      className="shop-image"
                      src={product.imageURL}
                      alt={`Image of ${product.name}`}
                    />
                    <div>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="grid-item-text">{product.name}</h3>
                      </Link>
                      <p>${product.price / 100}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  products: reduxState.products,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
