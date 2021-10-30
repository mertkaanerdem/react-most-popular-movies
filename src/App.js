import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import Footer from "./components/Footer";

import { MoviesProvider } from "./context/MoviesContext";

function App() {
  return (
    <MoviesProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/react-most-popular-movies/" component={Movies} exact />
          <Route path="/:id" component={Movie} />
        </Switch>
        <Footer />
      </Router>
    </MoviesProvider>
  );
}

export default App;
