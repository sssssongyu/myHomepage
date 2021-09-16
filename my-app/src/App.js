
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './css/welcome.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './pages/welcomePage'
import Home from './pages/homePage'

function App() {
  return (
      <>
        <BrowserRouter basename={'/'} >
            <Switch>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/Home" component={Home}/>
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
