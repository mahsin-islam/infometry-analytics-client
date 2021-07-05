import React, { createContext, useState, Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Login from './components/Login/Login/Login';
import { getDecodedUser } from "./components/Login/Login/LoginManager";

import Preloader from './components/Shared/Preloader/Preloader';
// import Home from './components/Home/Home/Home';
// import NotFound from './components/NotFound/NotFound'
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
// import Dashboard from './components/Dashboard/Dashboard/Dashboard';
const NotFound = lazy(() => import('./components/NotFound/NotFound.js'));

const Home = lazy(() => import('./components/Home/Home/Home'));
const LoginModal = lazy(() => import('./components/Login/Login/LoginModal'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard/Dashboard'));


export const UserContext = createContext();

function App() {
  // const [loggedInUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState({})

  return (
    <UserContext.Provider value={{user, setUser, admin, setAdmin, selectedService, setSelectedService}}>
    <Router>
        {/* <Toaster/> */}
        <Suspense fallback={<Preloader/>}>
          <Switch>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <LoginModal/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
          </Switch>
        </Suspense>
    </Router>
  </UserContext.Provider>

    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
  );
}

export default App;
