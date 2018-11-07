import * as React from 'react';
import Button from './Button';
// const Button = (React as any).lazy(() => import('./Button'));

interface Props {
  num: number;
}

const DucksComponent: React.SFC<Props> = ({ num }) => (
  <>
    <Button>ooo</Button>
    <p>{num}</p>
  </>
);
export default DucksComponent;
