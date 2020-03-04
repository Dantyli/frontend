import React,{Suspense,lazy} from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './pages/login'
const Home=lazy(()=>import('./pages/home'))
const Splash=lazy(()=>import('./pages/splash'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
          <Switch>
             <Route component={Home} path="/home" />
             <Route component={Splash} exact path="/" />
             <Route component={Login}  path="/login" />
          </Switch>
      </Suspense>
    </div>
  );
}

export default App;
