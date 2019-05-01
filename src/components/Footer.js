import React, { Component } from 'react';
import '../App.css';

import { ALL_TODOS, ACTIVE_TODOS, DONE_TODOS } from '../constants/filter-types';
import { ACTIVE_ALL_TODO, DONE_ALL_TODO } from '../constants/action-types';


class Footer extends Component {

  handleActiveClick(buttonAll) {
    switch (buttonAll) {
      case DONE_ALL_TODO :
        this.props.doneAllTodo();
        break;
      default:  // ACTIVE_ALL_TODO
        this.props.activeAllTodo();
    }
  }

  handleFilterClick(buttonName) {
    switch (buttonName) {
      case ACTIVE_TODOS:
        this.props.filterActive();
        break;
      case DONE_TODOS:
        this.props.filterDone();
        break;
      default:  // ALL_TODOS
        this.props.filterAll();
    }
  }

  render () {
    return (
      <footer className="toolbar toolbar-footer">
        <div className="toolbar-actions">

          <span className="App-padding">Filters:</span>

          <div className="btn-group" id="buttonFilter">
            <button name={ ALL_TODOS } className="btn btn-default"
              onClick={(e) => this.handleFilterClick(e.target.name)}>
              All
            </button>
            <button name={ ACTIVE_TODOS } className="btn btn-warning"
              onClick={(e) => this.handleFilterClick(e.target.name)}>
              Active
            </button>
            <button name={ DONE_TODOS } className="btn btn-positive"
              onClick={(e) => this.handleFilterClick(e.target.name)}>
              Done
            </button>
          </div>

          <div className="pull-right">
            <div className="btn-group" id="buttonAll">
              <button name={ ACTIVE_ALL_TODO } className="btn btn-warning"
                onClick={(e) => this.handleActiveClick(e.target.name)}>
                Active All
              </button>
              <button name={ DONE_ALL_TODO } className="btn btn-primary"
                onClick={(e) => this.handleActiveClick(e.target.name)}>
                Done All
              </button>
            </div>
            <span className="App-padding">
              [{ this.props.todos.length }] Todos
            </span>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
