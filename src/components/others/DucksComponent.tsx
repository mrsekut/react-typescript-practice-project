import * as React from 'react';

interface Props {
  num: number;
}

const DucksComponent: React.SFC<Props> = ({ num }) => (
  <>
    <p>{num}</p>
  </>
);
export default DucksComponent;
