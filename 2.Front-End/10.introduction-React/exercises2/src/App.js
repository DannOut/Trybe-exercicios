import './App.css';
import React, {Component} from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends Component {
render(){
  return (
   <ul> {tarefas.map(curr => Task(curr)) }</ul> 
  )
}
}

export default App;
