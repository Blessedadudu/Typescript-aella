import { lazy, Suspense } from "react"
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Spinner from "./Spinner/Spinner";
// import Films from './components/roots/Films/Films'
import People from './components/roots/People/People'
import Planets from './components/roots/Planets/Planets'
import Starship from './components/roots/Starship/Starship';

const Films = lazy(() => import('./components/roots/Films/Films'))
// const Films = lazy(() => import('./components/roots/Films/Films'))
// const Films = lazy(() => import('./components/roots/Films/Films'))
// const Films = lazy(() => import('./components/roots/Films/Films'))


function App() {
  return (
    <div className="App">
      <Switch> 
            <Route exact path='/' component={Home} />
            <Suspense fallback={<Spinner/>}>
              <Route path='/films' component={Films} />
            </Suspense>
            <Route path='/people' component={People} />
            <Route path='/planets' component={Planets} />
            <Route path='/spaceships' component={Starship} />
      </Switch>
    </div>
  );
}

export default App;
