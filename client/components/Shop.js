import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allProducts';

export class Shop extends Component {
  constructor() {
    super();
    this.state = {
      filtered: 'All',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleChange(event) {
    this.setState({ filtered: event.target.value });
  }

  handleFilterClick(categoryName) {
    this.setState({ filtered: categoryName });
  }

  render() {
    console.log('all products', this.props.products.category);
    const { products } = this.props;

    const productFilter = products.filter((product) => {
      if (this.state.filtered === 'All') return product;
      if (this.state.filtered === 'Cakes') return product.category === 'cake';
      if (this.state.filtered === 'Cookies')
        return product.category === 'cookie';
      if (this.state.filtered === 'Cupcakes')
        return product.category === 'cupcake';
      if (this.state.filtered === 'Mini') return product.category === 'mini';
      if (this.state.filtered === 'Other') return product.category === 'other';
    });

    console.log('FILTER', this.state.filtered);
    return (
      <section className="grid-section">
        Baked Goods
        <div className="grid-container">
          <div className="grid-section-left">
            <input className="category-search" placeholder="Search"></input>
            <p className="grid-section-left-category-bold">Categories</p>
            <ul>
              <li
                onClick={() => {
                  this.handleFilterClick('All');
                }}
              >
                All
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cakes');
                }}
              >
                Cakes
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cookies');
                }}
              >
                Cookies
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cupcakes');
                }}
              >
                Cupcakes
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Mini');
                }}
              >
                Mini
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Other');
                }}
              >
                Other
              </li>
            </ul>
          </div>
          <div className="grid-section-right">
            {productFilter.map((product) => {
              return (
                <Link to={`/products/${product.id}`}>
                  <div className="grid-item" key={product.id}>
                    <img
                      className="shop-image"
                      src={product.imageURL}
                      alt={`Image of ${product.name}`}
                    />
                    <div className="cookie-description">
                      <h3 className="grid-item-text">{product.name}</h3>
                      <p className="grid-item-text">${product.price / 100}</p>
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
