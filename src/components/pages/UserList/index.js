import React, { PureComponent } from 'react';
import {Input, Error} from '../../atoms';

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
    if(email){
      users = {
        ...users,
        [email]:{
          username,
          email,
          password
        }
      }
      localStorage.setItem('users',JSON.stringify(users));
    }
    this.setState({
      users
    })
  }
  render() {
    const {users} = this.state;
    const userArr = Object.entries(users);
    return (
      <div className="userList p-30">
            {userArr.length>0?
              userArr.map(([key,value])=>(
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
              )):
              <Error msg='No user is available.'/>
            }
        </div>
    );
  }

}

export default UserList;
