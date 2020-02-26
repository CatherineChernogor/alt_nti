import '../../App.css';
import React from 'react';
import { NavLink } from "react-router-dom";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  onSubmitHandler = () => {
    this.props.sendPost("auth/login/", {
      username: this.state.username,
      password: this.state.password
    });
  }

  onChangeField = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { username, password } = this.state;
    return (
      <div className="Auth">

        <form className="form-auth option-text-m">

          <input type="text" value={username} className='field' name='username' onChange={this.onChangeField}></input>
          <input type="password" value={password} className='field' name='password' onChange={this.onChangeField}></input>


          <NavLink to="/0/task/1" className='submit-button'>
            <input type="submit" value="ВОЙТИ" className='submit-button' onClick={this.onSubmitHandler}></input>
          </NavLink>

        </form>
      </div>
    );
  }
}

export default Auth;
