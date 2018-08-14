import * as React from "react";
import "./App.css";

import Button from "./components/atoms/Button/index";
import VirtualDOM from "./components/atoms/VirtualDOM/index";
import InputField from "./components/atoms/InputField/index";
import SearchBox from "./components/atoms/SearchBox/index";

import logo from "./logo.svg";

class App extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
  }
  public render() {
    const data = { name: "Tom", age: 40 };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React and TypeScript Test Practice</h1>
        </header>

        {/* tslint:disable-next-line */}
        <Button onClick={() => console.log("oooo")}>hello</Button>
        <VirtualDOM data={data} />
        <InputField clickFunc={() => console.log("clickFunc")} />
        <SearchBox />
      </div>
    );
  }
}

export default App;
