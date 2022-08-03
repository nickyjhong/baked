import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/AuthForm';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import CreateUser from './components/CreateUser';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/users/:id" component={UserProfile} /> */}
            <Route path="/profile" component={UserProfile} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Shop} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreateUser} />
            <Route path="/cart" component={Cart} />
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
