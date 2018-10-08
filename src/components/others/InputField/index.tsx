import * as React from "react";

interface Props {
  clickFunc?: (x: any) => void;
}

interface State {
  remainCount?: number;
  value?: any;
}

export default class Textarea extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { remainCount: 10, value: "" };
  }
  public reflectInput(length: number, value: any) {
    this.setState({ remainCount: 10 - length, value });
  }
  public render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.reflectInput.bind(this)(e.target.value.length, e.target.value);
          }}
        />
        <br />
        <span>{this.state.remainCount}</span>
        <br />
        <button
          type="button"
          onClick={() => {
            if (this.state.remainCount === 10 || this.state.remainCount < 0) {
              return;
            }
            this.props.clickFunc(this.state.value);
          }}>
          submit
        </button>
      </div>
    );
  }
}
