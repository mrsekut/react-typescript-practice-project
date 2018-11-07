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

// ==========================================
// とりあえず動いたもの Context APIの軽い参考
// https://daveceddia.com/usecontext-hook/
// ==========================================
// import * as React from 'react';
// // @ts-ignore
// import { createContext } from 'react';

// const { Provider, Consumer } = createContext('light');

// const Context = () => (
//   <Consumer>{value => <div>values: {value}</div>}</Consumer>
// );

// const WhileComponent = ({}) => {
//   // このコンポーネントを仲介しているが、わざわざpropsを流さなくても渡る
//   return (
//     <div>
//       <Context />
//     </div>
//   );
// };

// export const ContextComponent = () => (
//   <Provider value={'dark'}>
//     <WhileComponent />
//   </Provider>
// );

// export default ContextComponent;

// ==========================================
// https://qiita.com/loverails/items/50126e874b24ff984471
// ==========================================
// import * as React from 'react';

// const store = {
//   state: {
//     foo: 1
//   },
//   update: cb => {
//     this.state = cb;
//   }
// };

// const { Provider, Consumer } = React.createContext(store);

// const Context = () => (
//   <Consumer>
//     {({ state, update }) => (
//       <div>
//         {/* <button onClick={() => update(() => ({ foo: state.foo + 1 }))}> */}
//         <button onClick={() => update({ foo: state.foo + 1 })}>click</button>
//         <p>Foo is {state.foo}</p>
//       </div>
//     )}
//   </Consumer>
// );

// export const ContextComponent = () => (
//   <Provider value={store}>
//     <Context />
//   </Provider>
// );

// export default ContextComponent;
