import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allProducts';
import { addToCart } from '../store/cart';
import { toast } from 'react-toastify';

export class AdminShop extends Component {
  constructor() {
    super();
    this.state = {
      filtered: 'All',
      term: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  handleChange(event) {
    this.setState({ ...this.state, term: event.target.value });
  }

  handleFilterClick(categoryName) {
    this.setState({ filtered: categoryName });
  }

  render() {
    const { products } = this.props;

    const productFilter = products.filter((product) => {
      if (this.state.filtered === 'All') return product;
      if (this.state.filtered === 'Cakes') return product.category === 'cake';
      if (this.state.filtered === 'Cookies') return product.category === 'cookie';
      if (this.state.filtered === 'Cupcakes') return product.category === 'cupcake';
      if (this.state.filtered === 'Mini') return product.category === 'mini';
      if (this.state.filtered === 'Other') return product.category === 'other';
    });

    return (
      <section className="grid-section">
        Baked Goods
        <div className="grid-container">
          <div className="grid-section-left">
            <input 
              className="category-search" 
              placeholder="Search"
              onChange={this.handleChange}
            >
            </input>
            <p className="grid-section-left-category-bold">Categories</p>
            <ul>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('All');
                }}
                key="cat-all shop-cat"
              >
                All
              </li>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('Cakes');
                }}
                key="cat-cakes shop-cat"
              >
                Cakes
              </li>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('Cookies');
                }}
                key="cat-cookies shop-cat"
              >
                Cookies
              </li>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('Cupcakes');
                }}
                key="cat-cupcakes shop-cat"
              >
                Cupcakes
              </li>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('Mini');
                }}
                key="cat-mini shop-cat"
              >
                {' '}
                Mini
              </li>
              <li
                className="cat-list"
                onClick={() => {
                  this.handleFilterClick('Other');
                }}
                key="cat-other shop-cat"
              >
                Other
              </li>
            </ul>
          </div>

          <div className="grid-section-right">
            {productFilter.map((product) => (
              product.name.toLowerCase().includes(this.state.term.toLowerCase()) ? (
                <div className="grid-item" key={product.id}>
                <Link to={`/products/${product.id}`} >
                  <img
                    className="shop-image"
                    src={product.imageURL}
                    alt={`Image of ${product.name}`}
                  />
                </Link>
                <div className="cookie-description">
                  <h3 className="grid-item-text">{product.name}</h3>
                  <p className="grid-item-text">${parseFloat(product.price / 100).toFixed(2)}</p>
                  <div className="shop-btn-container">
                    <Link to={`/products/${product.id}/update`}>
                      <button className='view-more-btn shop-btn'>Edit Product</button>
                    </Link>
                    <button className='add-to-cart shop-btn' onClick={() => {this.props.addToCart(product); toast('Added to cart') }}>Add To Cart</button>
                  </div>
                </div>
              </div>
                ) : (
                  ""
                )
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  getProducts: () => dispatch(fetchProducts()),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminShop);


