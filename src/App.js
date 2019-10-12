import React from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Movie from './components/Movie'
import Subscribe from './components/Subscribe'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';


function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <Greet /> */}
      {/* <Welcome name="Edward Norton"/>
      <Movie name="Fightclub" director="David Fincher"/> */}
      {/* <Subscribe /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
