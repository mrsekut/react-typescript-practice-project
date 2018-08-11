import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import Button from "./index";

describe("clickイベントのテスト", () => {
  test("Appコンポーネントにイベントを渡す", () => {
    const testMock = jest.fn();
    const subject = shallow(<Button onClick={testMock} />);
    subject.find("span").simulate("click");
    expect(testMock).toHaveBeenCalled();
  });
});
