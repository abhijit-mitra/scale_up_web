import React, { PureComponent } from 'react';

class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userCount:0
    };
  }
  componentDidMount=()=>{
    const users = JSON.parse(localStorage.getItem('users'))||{};
    const userCount = Object.keys(users).length;
    this.setState({
      userCount
    })
  }

  render() {
    const {userCount} = this.state;
    return (
      <div className="card text-center p-30">
          <div className="card-header">
            Dashboard
          </div>
          <div className="card-body">
            <h5 className="card-title">Total Number of resgistered users.</h5>
            <a href="#" className="btn btn-primary">{userCount}</a>
          </div>
          <div className="card-footer text-muted">
          </div>
      </div>
    );
  }

}

export default Dashboard;
