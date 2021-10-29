import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Movies} exact />
        <Route path="/:id" component={Movie} />
      </Switch>
    </Router>
  );
}

export default App;
