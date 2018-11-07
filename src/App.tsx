import * as React from 'react';
import styled from 'styled-components';
import RxjsComponent from './components/others/rxjs';
import ContextComponent from './components/others/Context/Context';
import DucksContainer from './components/others/DucksContainer';

const App = () => (
  <Wrapper>
    <Header>
      <Title>React and TypeScript Test Practice</Title>
    </Header>
    <RxjsComponent />
    <DucksContainer />
    <ContextComponent />
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
