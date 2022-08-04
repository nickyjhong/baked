import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allProducts';

export class Shop extends Component {
  constructor() {
    super()
    this.state = {
      filtered: 'All'
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    this.props.getProducts();
  }
  handleChange(event) {
    this.setState({filtered: event.target.value})
  }
  render() {

    const { products } = this.props

    const productFilter = products.filter((product => {
      if (this.state.filtered === 'All') return product
      if (this.state.filtered === 'Cakes') return product.category === 'cake'
      if (this.state.filtered === 'Cookies') return product.category === 'cookie'
      if (this.state.filtered === 'Cupcakes') return product.category === 'cupcake'
      if (this.state.filtered === 'Mini') return product.category === 'mini'
      if (this.state.filtered === 'Other') return product.category === 'other'
    }))
    console.log('FILTER', this.state.filtered)
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
            {/* <ul>
              <li>All</li>
              <li>Cakes</li>
              <li>Cookie</li>
              <li>Cupcake</li>
              <li>Mini</li>
              <li>Other</li>
            </ul> */}
            <select value={this.state.filtered} onChange={this.handleChange} name="filtered">
              <option>All</option>
              <option>Cakes</option>
              <option>Cookies</option>
              <option>Cupcakes</option>
              <option>Mini</option>
              <option>Other</option>
            </select>

            {/* <ul value={this.state.filtered} onClick={this.handleChange} name="filtered">
              <li>All</li>
              <li>Cakes</li>
              <li value={this.state.filtered} onClick={this.handleChange} name="filtered">Cookies</li>
              <li value={this.state.filtered} onClick={this.handleChange} name="filtered">Cupcakes</li>
              <li value={this.state.filtered} onClick={this.handleChange} name="filtered">Mini</li>
              <li value={this.state.filtered} onClick={this.handleChange} name="filtered">Other</li>
            </ul> */}
            
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
