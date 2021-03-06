import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../actions/auth';
import React, { Component } from 'react';

class Navbar extends Component {
  logout(){
    localStorage.removeItem('token');
    this.props.dispatch(logout());
  }
  render() {
    const{user, isLoggedin} = this.props.auth;
    return (
      <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        {isLoggedin?
          <div className="user">
            <img
              src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
              alt="user-dp"
              id="user-dp"
            />
            <span>{user.name}</span>
            <div className="nav-links">
              <ul>
                <li onClick = {this.logout.bind(this)}>
                  Log Out
                </li>
              </ul>
            </div>
          </div>
          :
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
    );
  }
}

function mapStateToProps(state){
  return{
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Navbar);
