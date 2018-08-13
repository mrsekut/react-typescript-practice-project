import * as React from "react";
import "./App.css";

import Button from "./components/atoms/Button/index";
import VirtualDOM from "./components/atoms/VirtualDOM/index";

import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    const data = { name: "Tom", age: 40 };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and TypeScript Test Practice</h1>
        </header>

        {/* tslint:disable-next-line */}
        <Button onClick={() => console.log("oooo")} />
        <VirtualDOM data={data} />
      </div>
    );
  }
}

export default App;
