import React from "react";
import {connect} from 'react-redux';
import { fetchProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  render() {
    const { name, imageURL, price, description, category } = this.props.product
    console.log('PROPS',this.props)
    return (
      <div>
        <p>{name}</p>
        <img src={imageURL} />
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);