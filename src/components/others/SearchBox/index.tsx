import * as React from "react";
import { inquireDatabase } from "src/api/index";

// interface Props {}

interface State {
  result: string;
}

export default class SearchBox extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { result: "" };
  }
  public showUsersList(received: any) {
    if (received instanceof Error) {
      this.setState({ result: received.message });
    } else {
      const array = received.map((obj: any) => {
        const data: any = [];
        Object.keys(obj).forEach(elem => {
          data.push(obj[elem]);
        });
        return data.join(" ");
      });
      this.setState({ result: array.join(", ") });
    }
  }
  public render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e: any) => {
            inquireDatabase(e.target.value, this.showUsersList.bind(this));
          }}
        />
        <div>{this.state.result}</div>
      </div>
    );
  }
}
