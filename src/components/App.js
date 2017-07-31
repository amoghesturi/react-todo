import React, {Component} from 'react';
import TodoContainer from '../containers/todoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoContainer />
      </div>
    );
  }
}
export default App;
