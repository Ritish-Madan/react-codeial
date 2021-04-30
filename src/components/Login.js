import React, { Component } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/auth';

class Login extends Component {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        password: ''
      }
  }

  HandleEmailChange = (event)=>{
    this.setState({
      email: event.target.value
    })
  }

  HandlePasswordChange = (event)=>{
    this.setState({
      password: event.target.value
    })
  }

  handleFormSubmit = (event)=>{
    event.preventDefault();

    const {email, password} = this.state;
    if(email && password){
      this.props.dispatch(login(email, password))
    }
  }
  render() {
    const{error, inProgress} = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input type="email" placeholder="Email" onChange = {this.HandleEmailChange} value={this.state.email} required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" onChange = {this.HandlePasswordChange} value={this.state.password} required />
        </div>
        <div className="field">
          {inProgress 
          ? <button onClick = {this.handleFormSubmit} disabled={inProgress}>Logging in...</button>
          :<button onClick = {this.handleFormSubmit} disabled={inProgress}>Log In</button>
          }
        </div>
      </form>
    );
  }
}
function mapStateToProps(state){
  return{
    auth: state.auth
  }
}
export default connect(mapStateToProps)(Login);
