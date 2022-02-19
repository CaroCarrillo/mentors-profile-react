import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="./components/Navbar.jsx">
            <Navbar />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
