import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

//App 컴포넌트를 정의함
function App() {
  return (
    //App 컴포넌트는 HTML을 반환하고 있음
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;