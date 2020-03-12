import '../../App.css';
import React from 'react';
import { Redirect } from "react-router-dom";
import { sendPost } from '../../modules/Requests';

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
      let t = sendPost("auth/login/", {
        username: this.state.username,
        password: this.state.password
      });
      let token = await t;
      (token === sessionStorage.token && token) ?
        this.setState({ redirect: true })
        : this.setState({ redirect: false });
    })();
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
