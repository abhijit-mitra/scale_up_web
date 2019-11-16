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
      password:''
    };
  }

  handleChange = (type)=>(e) =>{
    const {value} = e.target;
    this.setState((state)=>({
      ...state,
      [type]:value
    }));
  }

  render() {
    const {username, email, password} = this.state;
    return (
      <div className="full-height-v d-flex justify-content-center align-items-center">
        <div className="row  border border-primary p-30 login">
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
                  <Button label='Next' disabled={!username || !email ||!password}/>
                </Link>
            </div>
        </div>
      </div>
    );
  }

}

export default Login;
