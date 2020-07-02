import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Protected = ({component: Component, path, loggedIn}) => {
  console.log(location.pathname)
  console.log(history)

  return (
    <Route path={path} render={(props) => (
       loggedIn ? (
        <Component {...props}/>
      ) : (
        // hacky redirect for people who type /edit or /new directly into url bar
        <Redirect to={location.pathname.replace(/edit|stories\/new/,'')}/>
      )
    )}/>
  )
};

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
