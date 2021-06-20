import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signup, clearAuthState} from '../actions/auth';

class SignUp extends Component {
  constructor(props){
    super(props);
      this.state = {
        email: '',
        password: '',
        name: '',
        confirm_password: ''
      }
  }

  componentWillUnmount(){
    this.props.dispatch(clearAuthState())
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

  HandleNameChange = (event)=>{
    this.setState({
      name: event.target.value
    })
  }

  HandleConfirmChange = (event)=>{
    this.setState({
      confirm_password: event.target.value
    })
  }

  handleFormSubmit = (event)=>{
    event.preventDefault();

    const {email, password, name, confirm_password} = this.state;
    if(email && password){
      this.props.dispatch(signup(email, password, name, confirm_password))
    }
  }
  render() {
    const{error, inProgress} = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input type="text" placeholder="Name" onChange = {this.HandleNameChange} value={this.state.name} required />
        </div>
        <div className="field">
          <input type="email" placeholder="Email" onChange = {this.HandleEmailChange} value={this.state.email} required />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" onChange = {this.HandlePasswordChange} value={this.state.password} required />
        </div>
        <div className="field">
          <input type="password" placeholder="Confirm Password" onChange = {this.HandleConfirmChange} value={this.state.confirm} required />
        </div>
        <div className="field">
          {inProgress 
          ? <button onClick = {this.handleFormSubmit} disabled={inProgress}>Signing Up...</button>
          :<button onClick = {this.handleFormSubmit} disabled={inProgress}>Sign Up</button>
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
export default connect(mapStateToProps)(SignUp);
