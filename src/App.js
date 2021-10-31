import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from "./Navbar"
import Art from "./Art"
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/Aboutme">
              <Art/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
