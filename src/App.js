import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/LogIn/LogIn/Login';
import Register from './Pages/LogIn/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Navigation from './Shared/Navigation/Navigation';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute
            path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
