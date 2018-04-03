import React, { Component } from 'react';
import AppRouter from './AppRouter';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default App;