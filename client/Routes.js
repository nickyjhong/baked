import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Admin from './components/Admin';
import SingleProduct from './components/SingleProduct';
import OrderHistory from './components/OrderHistory';
import UserProfile from './components/UserProfile';
import CreateProduct from './components/CreateProduct';
import CreateUser from './components/CreateUser';
import UpdateProduct from './components/UpdateProduct';
import NotFoundPage from './components/NotFoundPage';
import OrderSuccess from './components/OrderSuccess';
import Checkout from './components/Checkout';
import AdminUsers from './components/AdminUsers';
import AdminShop from './components/AdminShop';
import Contact from './components/Contact';
import About from './components/About';

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <div>
            {isAdmin ? (
              <Switch>
                {/* Routes if logged in and admin */}
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/users" component={AdminUsers} />
                <Route exact path="/admin/products" component={AdminShop} />
                <Route path="/products/add" component={CreateProduct} />
                <Route exact path="/products/:id/update" component={UpdateProduct} />
                <Route path="/products/:id" component={SingleProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/profile" component={UserProfile} />
                <Route path="/users/orders" component={OrderHistory} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/orderSuccess" component={OrderSuccess} />
                <Route path="*" component={NotFoundPage} status={404} />
              </Switch>
            ) : (
              <Switch>
                {/* Routes if logged in but not admin */}
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Shop} />
                <Route exact path="/products/:id" component={SingleProduct} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/profile" component={UserProfile} />
                <Route path="/users/orders" component={OrderHistory} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/orderSuccess" component={OrderSuccess} />
                <Route path="*" component={NotFoundPage} status={404} />
              </Switch>
            )}
          </div>
        ) : (
          <Switch>
            {/* Routes if not logged in */}
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreateUser} />
            <Route exact path="/products" component={Shop} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/orderSuccess" component={OrderSuccess} />
            <Route path="*" component={NotFoundPage} status={404} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: !!state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
