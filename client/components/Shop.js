import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allProducts';
import { addToCart } from '../store/cart';

export class Shop extends Component {
  constructor() {
    super();
    this.state = {
      filtered: 'All',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
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
  handleAdd() {
    this.props.addToCart(this.props.product)
    alert('item added to cart')
  }


  render() {
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
                key="cat-all shop-cat"
              >
                All
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cakes');
                }}
                key="cat-cakes shop-cat"
              >
                Cakes
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cookies');
                }}
                key="cat-cookies shop-cat"
              >
                Cookies
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Cupcakes');
                }}
                key="cat-cupcakes shop-cat"
              >
                Cupcakes
              </li>
              <li
                onClick={() => {
                  this.handleFilterClick('Mini');
                }}
                key="cat-mini shop-cat"
              >
                {' '}
                Mini
              </li>
              <li
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
            {productFilter.map((product) => {
              const displayPrice = parseFloat(product.price / 100).toFixed(2) 
              return (
                <div>
                <Link to={`/products/${product.id}`} key={product.id}>
                  <div className="grid-item">
                    <img
                      className="shop-image"
                      src={product.imageURL}
                      alt={`Image of ${product.name}`}
                    />
                    <div className="cookie-description">
                      <h3 className="grid-item-text">{product.name}</h3>
                      <p className="grid-item-text">${displayPrice}</p>
                      <button className='view-more-btn'>View More</button>

                    </div>
                  </div>
                </Link>
                      <button className='add-to-cart' onClick={() => this.handleAdd()}>Add To Cart</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  getProducts: () => dispatch(fetchProducts()),
  addToCart: (product) => dispatch(addToCart(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
