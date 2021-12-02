import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/Map";


function App() {

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path='/test' component={Login} />
          <Route exact path='/map' component={Map} />
        </Switch>
      </Router>
      This is testing
    </div>
  );
}

export default App;
