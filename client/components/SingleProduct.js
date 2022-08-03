import React from "react";
import { connect } from "../../server/api/products";
import { getSingleProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    try {
      this.props.loadSingleProduct(this.props.match.params.product);
    } catch (err) {
      console.error(err);
    }
  }

  addToCart() {}

  render() {
    const product = this.props.product;
    // const id = product.id; // might not need

    return (
      <div className="single-product">
        <h2>{product.name}</h2>
        <img src={product.imageURL} />
        <h4>{product.description}</h4>
        <br />
        <h3>{product.price}</h3>
        <br />
        <label for="quantity">Quantity</label>
        <select>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <br />
        <button onClick={this.addToCart}>Add To Cart</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleProduct: (product) => dispatch(getSingleProduct(product))
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
export default connected;