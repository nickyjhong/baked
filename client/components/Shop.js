import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../store/allproducts';

export class Shop extends Component {

    componentDidMount() {
        this.props.getProducts();
    }
  render() {
    return (
      <section className='grid-section'>
        Shopp
        <div className='grid-container'>
            {this.props.products.map((product) => {
                return (
                <div className='grid-item' key={product.id}>
                    <img
                        src={product.imageURL}
                        alt={`Image of ${product.name}`}
                    />
                    <div>
                        <Link to={`/products/${product.id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                        <p>${product.price}</p>
                    </div>
                </div>

                )
            })}
        </div> 
      </section> 
    )
  }
}

const mapStateToProps = (reduxState) => ({
    products: reduxState.products
})

const mapDispatchToProps = (dispatch, { history }) => ({
    getProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop)