import * as React from 'react';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Button from './index';

describe('clickイベントのテスト', () => {
  test('Appコンポーネントにイベントを渡す', () => {
    const testFuncMock = jest.fn();
    const subject = shallow(<Button onClick={testFuncMock}>hello</Button>);
    subject.find('button').simulate('click');
    expect(testFuncMock).toHaveBeenCalled();
  });
});

/*
Reference
- https://numb86-tech.hatenablog.com/entry/2016/10/30/140513

- jest.fn: 関数のモック
- shawlow: reactコンポーネントをレンダリング
- find: 該当する要素を探す
- simulate: イベントを実行
- toHaveBeenCalled: 関数が実行されたことを検知したらテストをパス
*/
