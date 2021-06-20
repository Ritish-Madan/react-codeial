import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

import { fetchPosts } from '../actions/posts';
import { Home, Navbar, Page404, Login, SignUp } from './';
import { authenticate } from '../actions/auth';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    const token = localStorage.getItem('token');
    if(token){
      const user = jwt_decode(token);

      this.props.dispatch(authenticate({
        email: user.email,
        name: user.name,
        id: user._id
      }));
    }
  }

  render() {
    const { posts } = this.props;
    // console.log(this.props);
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
