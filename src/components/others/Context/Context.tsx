import * as React from 'react';
// @ts-ignore
import { createContext, useContext } from 'react';

// const { Provider, Consumer } = createContext('light');
const NContext = createContext('light');

const Context = () => {
  const value = useContext(NContext);
  return <div>values: {value}</div>;
  //   return <NContext.Consumer>{v => <div>values: {v}</div>}</NContext.Consumer>;
};

const WhileComponent = ({}) => {
  // このコンポーネントを仲介しているが、わざわざpropsを流さなくても渡る
  return (
    <div>
      <Context />
    </div>
  );
};

export const ContextComponent = () => (
  <NContext.Provider value={'dark'}>
    <WhileComponent />
  </NContext.Provider>
);

export default ContextComponent;
