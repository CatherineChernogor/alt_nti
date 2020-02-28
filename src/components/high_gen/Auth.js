import '../../App.css';
import React from 'react';
import { NavLink, Redirect } from "react-router-dom";

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    }
  }


  onSubmitHandler = () => {
    (async () => {
      let token = this.props.sendPost("auth/login/", {
        username: this.state.username,
        password: this.state.password
      });
      let t = await token;
      this.validateLogin(t);
    })();
  }

  validateLogin = (token) => {
    (token === sessionStorage.token && token) ?
      this.setState({ redirect: true }) : this.setState({ redirect: false });
  }
  onChangeField = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    const { username, password } = this.state;
    let red = () => {
      if (this.state.redirect === true) {
        return (
          <Redirect to="/0/task/1" from="/auth" />)
      }
      else {
        console.log("try again");
        //return (<Redirect to="/auth" from="/auth" />) 
      }
    }


    return (
      <div className="Auth" >

        <form className="form-auth option-text-m">

          <input type="text" value={username} className='field' name='username' onChange={this.onChangeField}></input>
          <input type="password" value={password} className='field' name='password' onChange={this.onChangeField}></input>

          <input type="button" value="ВОЙТИ" className='submit-button' onClick={this.onSubmitHandler}></input>
          {red()}
        </form>
      </div>
    );
  }
}

export default Auth;
