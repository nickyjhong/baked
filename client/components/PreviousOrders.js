import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/allProducts";

export default class PreviousOrders extends Component {
  // componentDidMount() {
  //   this.props.getOrders();
  // }
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

// const mapStateToProps = (reduxState) => ({
//   products: reduxState.products,
// });

// const mapDispatchToProps = (dispatch, { history }) => ({
//   getProducts: () => dispatch(fetchProducts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PreviousOrders);
