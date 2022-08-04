import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/allProducts";

export class Shop extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <section className="grid-section">
        Baked Goods
        <div className="grid-container">
          <div className="grid-section-left">
            <input className="category-search" placeholder="Search"></input>
            {/* <h3>Cookies</h3>
            <h3>Cakes</h3>
            <h3>Pastries</h3>
            <h3>Doughnuts</h3>
            <h3>Cold Items</h3> */}
          </div>
          <div className="grid-section-right">
          {this.props.products.map((product) => {
            return (
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
                  <p>${product.price}</p>
                </div>
              </div>
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
