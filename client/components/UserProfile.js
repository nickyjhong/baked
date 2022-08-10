import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../store/singleUser';
import OrderHistory from './OrderHistory';

export class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Welcome {this.props.firstName}!</h2>

        <div className="profile-order-container">
          <OrderHistory />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allOrders: state.orders,
  firstName: state.auth.firstName,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
