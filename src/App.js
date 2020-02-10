import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
      ]
    }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">React Table</h1>
        </header>
      </div>
    )
  }
}

export default App;