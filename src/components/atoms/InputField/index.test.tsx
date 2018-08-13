import * as React from "react";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import InputField from "./index";

describe("inputのテスト", () => {
  //   test("state", () => {
  //     const subject = shallow(<InputField />);
  //     let remainCount = subject.state().remainCount;
  //     expect(remainCount).toBe(10);
  //     subject.find("input").simulate("change", { target: { value: "abc" } });
  //     remainCount = subject.state().remainCount;
  //     expect(remainCount).toBe(7);
  //   });
  test("click", () => {
    const mock = jest.fn();
    const subject = shallow(<InputField clickFunc={mock} />);
    subject.find("button").simulate("click");
    expect(mock).not.toHaveBeenCalled();
    subject.find("input").simulate("change", { target: { value: "abc" } });
    subject.find("button").simulate("click");
    expect(mock).toHaveBeenCalledTimes(1);
    subject.find("input").simulate("change", { target: { value: "qwerty" } });
    subject.find("button").simulate("click");
    expect(mock).toHaveBeenCalledWith("qwerty");
    expect(mock).toHaveBeenCalledTimes(2);
    //   subject
    //     .find("input")
    //     .simulate("change", { target: { value: "01234567890" } });
    //   let remainCount = subject.state().remainCount;
    //   expect(remainCount).toBe(-1);
    //   subject.find("button").simulate("click");
    //   expect(mock).toHaveBeenCalledTimes(2);
  });
});

/*
Reference
- https://numb86-tech.hatenablog.com/entry/2017/01/20/205457

- toHaveBeenCalledWith: 引数付きの関数に対して関数が実行されたかどうかをテスト
- toHaveBeenCalledTimes: 特定の関数が何回呼び出されたかを検証する
*/
