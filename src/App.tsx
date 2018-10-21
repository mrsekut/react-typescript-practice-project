import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import RxjsComponent from './components/others/rxjs';

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

        <RxjsComponent />
      </div>
    );
  }
}

export default App;
