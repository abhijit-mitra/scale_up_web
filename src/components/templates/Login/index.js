import React, { PureComponent } from 'react';
import {Link } from 'react-router-dom'

import {Input, Button} from '../../atoms';
import './style.css';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      errors:{
        email:'',
        hasError:false,
      }
    };
  }

  handle_email = (value) =>{
    if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      this.setState((state)=>({
        ...state,
        errors:{
          ...state.errors,
          email:'Invalid email address',
          hasError: true
        }
      }))
    }else{
      this.setState((state)=>({
        ...state,
        errors:{
          ...state.errors,
          email:'',
          hasError: false
        }
      }))
    }
  }

  handle_username = (value) => {
    return;
  }

  handle_password = (value) => {
    return;
  }

  handleChange = (type)=>(e) =>{
    const {value} = e.target;
    this.setState((state)=>({
      ...state,
      [type]:value
    }));
    this[`handle_${type}`](value);
  }

  render() {
    const {username, email, password, errors} = this.state;
    return (
      <div className="full-height-v d-flex justify-content-center align-items-center">
        <div className="row  border border-primary p-30 login">
            <h2 className="col-md-12 mb-3 d-flex justify-content-center">Login</h2>
            <div className="col-md-12 mb-3">
              <Input
                prepend='Username'
                value={username}
                onChange={this.handleChange('username')}
              />
            </div>
            <div className="col-md-12 mb-3">
              <Input
                prepend='Email'
                value={email}
                onChange={this.handleChange('email')}
                error={errors.email}
              />
            </div>
            <div className="col-md-12 mb-3">
              <Input
                prepend='Password'
                type='password'
                value={password}
                onChange={this.handleChange('password')}
              />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <Link to={`userlist/${username}&&${email}&&${password}`}>
                  <Button label='Next' disabled={!username || !email ||!password || errors.hasError}/>
                </Link>
            </div>
        </div>
      </div>
    );
  }

}

export default Login;
