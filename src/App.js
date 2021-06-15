import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login, { decodedUser } from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import axios from 'axios';
export const UserContext = createContext();
function App() {
  const [pannel, setPannel] = useState('applicant');
  const [loggedInUser, setLoggedInUser] = useState(decodedUser());


  return (
    <UserContext.Provider value={{ loggedInUser, setPannel }}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Dashboard pannel={pannel} />
          </Route>
          <PrivateRoute path={`/${pannel}-panel/:title`}>
            <Navbar />
            <Dashboard pannel={pannel} />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
