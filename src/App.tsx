import { lazy, Suspense } from "react"
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Spinner from "./Spinner/Spinner";
// import Films from './components/roots/Films/Films'
const Films = lazy(() => import('./components/roots/Films/Films'))
const People = lazy(() => import('./components/roots/People/People'))
const Planets = lazy(() => import('./components/roots/Planets/Planets'))
const Starship = lazy(() => import('./components/roots/Starship/Starship'))


function App() {
  return (
    <div className="App">
      <Switch> 
            <Route exact path='/' component={Home} />
            <Suspense fallback={<Spinner/>}>
              <Route path='/films' component={Films} />
              <Route path='/people' component={People} />
              <Route path='/planets' component={Planets} />
              <Route path='/spaceships' component={Starship} />
            </Suspense>
      </Switch>
    </div>
  );
}

export default App;
