import * as React from 'react';
import styled from 'styled-components';
// import RxjsComponent from './components/others/rxjs';
// import DucksContainer from './components/others/DucksContainer';
// import ContextComponent from './components/others/Context/Context';
// import PracticeHooks from './components/others/PracticeHooks';
import GridLayout from './components/others/GridLayout';

const App = () => (
  <Wrapper>
    <Header>
      <Title>React and TypeScript Test Practice</Title>
    </Header>
    {/* <RxjsComponent /> */}
    {/* <DucksContainer /> */}
    <GridLayout />
    {/* <PracticeHooks
      text="Focused, hard work is the real key
      to success. Keep your eyes on the goal,
      and just keep taking the next step
      towards completing it.`"
      maxLength={5}
    /> */}
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
