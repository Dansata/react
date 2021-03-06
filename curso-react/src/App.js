import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }
  render() {
    const todos = this.state.todos.map((todo, i) =>{
      return(
        <div className="col-lg-4 mt-4">
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
          </div>
        </div>

      )
    }
  )
    return (
      <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          Tareas <span className="badge badge-pill badge-light ml-2">{
            this.state.todos.length
          }</span>
        </a>
      </nav>

        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <div className="row">{ todos }</div>
        </div>
      </div>
    );
  }
}

export default App;
