import * as React from "react";
import { configure, shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import VirtualDOM from "./index";

describe("domのテスト", () => {
  test("VirtualDOMコンポーネントをレンダリング", () => {
    const elem = shallowToJson(
      shallow(<VirtualDOM data={{ name: "Tom", age: 40 }} />)
    );
    expect(elem).toMatchSnapshot();
  });
});

/*
Reference
- https://numb86-tech.hatenablog.com/entry/2016/10/31/171417

- toMatchSnapshot()のテストは一発目は通る
- shallowToJson: shallowの戻り値をjson化
- shallowのレンダリング結果のスナップショットテストを実行
*/
