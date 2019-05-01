import React, { Component } from 'react';
import './App.css';
import './css/photon.min.css';

import Footer from './containers/footerContainer';
import Header from './containers/headerContainer';
import TodoList from './components/TodoList.js';

class App extends Component {
  render() {

    return (
      <div className="window">
        <Header />

        <div className="window-content">
          <TodoList listOfTodos={this.props.todos} />
        </div>

        <Footer numberOfTodos={this.props.todos.length} />
      </div>
    );
  }
}

export default App;
