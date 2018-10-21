import * as React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and TypeScript Test Practice</h1>
        </header>

        {/* tslint:disable-next-line */}
      </div>
    );
  }
}

export default App;
