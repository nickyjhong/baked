import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchOrders } from '../store/allOrders'

export class OrderHistory extends React.Component {

  async componentDidMount() {
    await this.props.getOrders();
  }

  render() {
    const orders = this.props.orders
    return (
      <div>
        <h3>Order History</h3>
          {orders && orders.length !== 0 ? (
            <div className="Container">
              {orders.map((order => (
                <div order={order} key={order.id} >
                  <h4>Order #: {order.id}</h4>
                  {order.products.map(item => {
                    return (
                      <div key={item.id}>
                      <img className="productImg" src={item.imageUrl} /> {/* CHANGE TO imageURL for pic to load */}
                      {/* <Link to={`/products/${item.id}`}> */}
                      <p>{item.name}</p>
                      {/* </Link> */}
                      <p>Price: ${item.price / 100}</p>
                      </div>
                    )
                  })}
                </div>
              )))}
            </div>
          ) : (
            <div>No recent orders found</div>
          )}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  orders: state.orders,
})

const mapDispatchToProps = dispatch => ({
  getOrders: () => dispatch(fetchOrders()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
