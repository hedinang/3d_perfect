import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ThreeD from './components/pages/ThreeD';
import Forge from './components/pages/Forge';
import Ar from './components/pages/Ar';
import AnimationCanvas from './components/pages/AnimationCanvas';
export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={null}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/product' component={ThreeD} />
          <Route path='/forge' component={Forge} />
          <Route path='/ar' component={Ar} />
          <Route path='/animation' component={AnimationCanvas} />
        </Switch>
      </Suspense>
    </Router>
  )
}