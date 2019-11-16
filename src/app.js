import React from 'react'
import { Route } from 'react-router-dom';
import {NavBar, NavItem} from './components/atoms';
import Login from './components/pages/Login';
import UserList from './components/pages/UserList';
import Dashboard from './components/pages/Dashboard';

const App = () => (
  <div className='app'>
    <NavBar>
      <NavItem to='/' label='Login'/>
      <NavItem to='/userlist/:username&&:email&&:password' label='User List'/>
      <NavItem to='/dashboard' label='Dashboard'/>
    </NavBar>
    <main>
      <Route exact path="/" component={Login} />
      <Route path="/userlist/:username&&:email&&:password" component={UserList}/>
      <Route path="/dashboard" component={Dashboard}/>
    </main>
  </div>
)

export default App
