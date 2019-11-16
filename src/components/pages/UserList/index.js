import React, { PureComponent } from 'react';
import {Input} from '../../atoms';

class UserList extends PureComponent {
  constructor(props) {
    super(props);
    this.state={
      users:{}
    }
  }
  componentDidMount() {
    const {username, email, password} = this.props.match.params;
    let users = JSON.parse(localStorage.getItem('users')) || {};
    users = {
      ...users,
      [email]:{
        username,
        email,
        password
      }
    }
    localStorage.setItem('users',JSON.stringify(users));
    this.setState({
      users
    })
  }
  render() {
    const {users} = this.state;
    return (
      <div className="userList p-30">
            {Object.entries(users).map(([key,value])=>(
              <div className="row mb-3" key={value.email}>
                <div className="col-md-4">
                  <Input prepend='Username' value={value.username} disabled/>
                </div>
                <div className="col-md-4">
                  <Input prepend='Email' value={value.email} disabled/>
                </div>
                <div className="col-md-4">
                  <Input prepend='Password' value={value.password} disabled/>
                </div>
              </div>
              ))}
        </div>
    );
  }

}

export default UserList;
