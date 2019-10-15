import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Friends from './Friends';
import AddFriend from './AddFriend';


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
          <NavLink to='/addFriend'>AddFriend</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
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