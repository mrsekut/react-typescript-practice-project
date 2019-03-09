import * as React from 'react';
import styled, { css } from 'styled-components';

export default () => (
  <BlackBackground>
    <Grid>
      <Area area="ii">
        <Input />
      </Area>
      <Numbers />
      <Operator />
    </Grid>
  </BlackBackground>
);

export const areaStyle = css<{ area: string }>`
  grid-area: ${props => props.area};
`;

const Area = styled.div`
  ${areaStyle};
`;

const Input = styled.input`
  font-size: 1.8em;
  border-radius: 0.8em;
  outline: none;
  color: white;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
  width: 100%;
  box-sizing: border-box;
`;

const template = `
  ".  .  so so"
  "ii ii ii ii"
  "ac pm pc di"
  "k7 k8 k9 pw"
  "k4 k5 k6 mi"
  "k1 k2 k3 pl"
  "k0 k0 do eq" / 60px 60px 60px 60px
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-gap: 1em;
`;

const Circle = styled.div`
  border-radius: 22px;
  min-width: 50px;
  height: 50px;
  display: flex;
  font-weight: bold;
  color: white;
  font-size: 1.2em;
  line-height: 1em;
  /* box-shadow: 1px 8px 29px 0px #666; */
  cursor: pointer;
  user-select: none;
  :active {
    transition: transform 0.2s, box-shadow 0.2s;
    transform: translateY(1px);
    /* box-shadow: 1px 8px 20px 0px #666; */
  }
`;

const OrangeCircle = styled(Circle)`
  background: linear-gradient(
    0deg,
    rgba(220, 121, 0, 1) 0%,
    rgba(255, 161, 0, 1) 100%
  );
`;
const GrayCircle = styled(Circle)`
  background: linear-gradient(
    0deg,
    rgba(140, 140, 130, 1) 0%,
    rgba(176, 176, 176, 1) 65%
  );
`;

const Center = styled.div`
  align-self: center;
  text-align: center;
  width: 100%;
`;

export const OrangeButton: React.SFC<any> = ({ children }) => {
  return (
    <OrangeCircle>
      <Center>{children}</Center>
    </OrangeCircle>
  );
};
export const GrayButton: React.SFC<any> = ({ children }) => {
  return (
    <GrayCircle>
      <Center>{children}</Center>
    </GrayCircle>
  );
};

export const ButtonSamples = () => {
  return (
    <>
      <OrangeButton>1</OrangeButton>
      <GrayButton>1</GrayButton>
    </>
  );
};

const BlackBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
  padding: 1em;
  border-radius: 20px;
  width: fit-content;
  height: max-content;
`;

const Numbers = () => (
  <>
    {Array.from({ length: 10 }).map((_, i) => {
      return (
        <Area area={`k${i}`} key={i}>
          <GrayButton>{i}</GrayButton>
        </Area>
      );
    })}
  </>
);

const Operator = () => (
  <>
    <Area area="di">
      <OrangeButton>÷</OrangeButton>
    </Area>
    <Area area="pw">
      <OrangeButton>×</OrangeButton>
    </Area>
    <Area area="mi">
      <OrangeButton>-</OrangeButton>
    </Area>
    <Area area="pl">
      <OrangeButton>+</OrangeButton>
    </Area>
    <Area area="do">
      <GrayButton>.</GrayButton>
    </Area>
    <Area area="eq">
      <OrangeButton>=</OrangeButton>
    </Area>
    <Area area="ac">
      <OrangeButton>AC</OrangeButton>
    </Area>
    <Area area="pm">
      <OrangeButton>+/-</OrangeButton>
    </Area>
    <Area area="pc">
      <OrangeButton>%</OrangeButton>
    </Area>
  </>
);
