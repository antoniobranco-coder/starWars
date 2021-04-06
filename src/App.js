import './App.css';
import Catalog from './Catalog'
import Card from './Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/card/:id'>
              <Card />
            </Route>
            <Route exact path='/'>
              <Catalog />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

