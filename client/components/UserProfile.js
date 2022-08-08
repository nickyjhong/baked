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
    console.log('PROPS', this.props);
    return (
      <div>
        <h4>Welcome {this.props.firstName}!</h4>

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
