import React from 'react';
import './App.css';
import Login from './Login';

import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Friends from './Friends';


function App(props) {

  const onLogout = () => {
    localStorage.clear();
    props.history.replace('/');
  };
  return (
    <div className="App">
           <nav>
        <span>
          <NavLink exact to='/api/login'>Login</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/api/login'
          component={Login}
        />

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