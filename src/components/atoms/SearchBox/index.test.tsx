import { configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

import { inquireDatabase } from "../../../api/index";

// TODO: ファイルの場所はここじゃないほうが良い？
describe("非同期処理のテスト", () => {
  let mock: any;
  beforeEach(() => {
    mock = jest.fn();
  });
  test("Promise", () => {
    return inquireDatabase("Taro", mock).then(() =>
      expect(mock).toHaveBeenCalled()
    );
  });
  test("combine", () => {
    return inquireDatabase("Taro", mock)
      .then(() => {
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith([{ name: "Taro", country: "Japan" }]);
      })
      .then(() => inquireDatabase("Cate", mock))
      .then(() => expect(mock).toHaveBeenCalledTimes(2));
  });
});

/*
Reference
- https://numb86-tech.hatenablog.com/entry/2017/02/05/161015

- これはコンポーネントのテストではなく、APIのテスト
*/
