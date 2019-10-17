import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Friends from './Friends';
import AddFriend from './AddFriend';
import Home from './Home'


function App(props) {

  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
  };
  return (
    <div className="App">
           <nav>
        <span>
          <NavLink exact to='/' className='Navlinks'>Home</NavLink>
          <NavLink exact to='/api/login' className='Navlinks'>Login</NavLink>
          <NavLink to='/friends' className='Navlinks'>Friends</NavLink>
          <NavLink to='/addFriend' className='Navlinks'>AddFriend</NavLink>
        </span>
        <button onClick={onLogout} className='logout'>Logout</button>
      </nav>

      <main>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/api/login'
          component={Login}
          /> &nbsp;
        <Route
          exact
          path='/addFriend'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <AddFriend {...props} />
            }
            return <Redirect to='/api/login' />
          }}
        /> &nbsp;

        <Route
          exact
          path='/friends'
          render={props => {
            if (localStorage.getItem('payload')) {
              return <Friends {...props} />
            }
            return <Redirect to='/api/login' />
          }}
        />
      </main>
    </div>
  );
}

export default withRouter(App);