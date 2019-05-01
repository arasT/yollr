import React from 'react';
import uuidv1 from 'uuid';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title : ''};
  }

  // Render Component only if necessary (performance)
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.title !== nextState.title;
  }

  handleChange(value) {
    this.setState({title : value});
  }
  handleKeyDown(keyDown) {
    if (keyDown === "Enter") {
      this.props.addTodo({ todo : { id : uuidv1(), title : this.state.title, done : false } });
      this.setState({title : ''});
    }
  }

  render() {
    //console.log('Render Header');
    return (
      <header className="toolbar toolbar-header">
        <p className="title">Todo List</p>

        <div className="toolbar-actions">
          <input placeholder="New Todo..." className="App-fetch"
            value={this.state.title}
            onChange={(e) => this.handleChange(e.target.value)}
            onKeyDown={(e) => this.handleKeyDown(e.key)} />
        </div>
      </header>
    );
  }

}

export default Header;
