import * as React from "react";

interface IProps {
  data: {
    name: string;
    age: number;
  };
}

const VirtualDOM: React.SFC<IProps> = ({ data }: IProps) => (
  <div>
    名前: {data.name}
    <br />
    年齢: {data.age}
  </div>
);
export default VirtualDOM;
