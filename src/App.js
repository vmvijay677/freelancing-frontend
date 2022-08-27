import './App.css';
import Clogin from './Components/CLogin/Clogin';
import Csignup from './Components/CSignup/Csignup';
import Flogin from './Components/FLogin/Flogin';
import Fsignup from './Components/FSignup/Fsignup';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Fhome from './Components/FHome/Fhome';
import Chome from './Components/CHome/Chome';

function App() {
  const freelancer = localStorage.getItem("freelancer");

  const client = localStorage.getItem("client");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            {!freelancer && !client ? <Home /> :
              freelancer ? <Redirect to='/freelancer/home' /> : <Redirect to='/client/home' />}
          </Route>

          <Route exact path='/freelancer/login'>
            {!freelancer ? <Flogin /> : <Redirect to='/freelancer/home' />}
          </Route>

          <Route exact path='/client/login'>
            {!client ? <Clogin /> : <Redirect to='/client/home' />}
          </Route>

          <Route exact path='/freelancer/signup'>
            {!freelancer ? <Fsignup /> : <Redirect to='/freelancer/home' />}
          </Route>

          <Route exact path='/client/signup'>
            {!client ? <Csignup /> : <Redirect to='/client/home' />}
          </Route>

          <Route exact path='/freelancer/home'>
            {freelancer ? <Fhome /> : <Redirect to='/' />}
          </Route>

          <Route exact path='/client/home'>
            {client ? <Chome /> : <Redirect to='/' />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
