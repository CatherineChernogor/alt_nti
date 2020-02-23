import './App.css';
import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";


class Auth extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="Auth">

          <form className="form-auth option-text-m">
                <input type="text" value="Логин" className='field'
                >{/*onBlur="if(this.value == '') this.value = 'Логин'"
                onFocus="if(this.value == 'Логин') this.value = ''" required*/}
                </input>

                <input type="password" value="Пароль" className='field'>{/*}
                  onBlur="if(this.value == '') this.value = 'Пароль'"
              onFocus="if(this.value == 'Пароль') this.value = ''" required>*/}
                </input>

                <input type="submit" value="ВОЙТИ" className='submit-button'></input>

          </form>
        </div>
      </BrowserRouter>

    );
  }
}

export default Auth;
