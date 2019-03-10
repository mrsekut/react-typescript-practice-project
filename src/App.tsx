import * as React from 'react';
import styled from 'styled-components';
import PostForm from './components/others/ReduxForm';
// import List from './components/atoms/List';
import Memo from './components/others/Memo';

const App = () => (
  <Wrapper>
    <Header>
      <Title>React and TypeScript Test Practice</Title>
    </Header>
    {/* <List
      data={['Alice', 'Bob', 'Carol', 'Dan', 'Eve', 'Frank']}
      renderRow={(r: string, i: number) => <div>{`${i}: ${r}`}</div>}
      empty={<div>みつかりませんでした</div>}
    /> */}

    <Memo />

    <PostForm />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.div`
  font-size: 1.5em;
`;
