import * as React from 'react';

interface Props {
  num: number;
}

const DucksComponent: React.SFC<Props> = ({ num }) => {
  return (
    <div>
      <p>{num}</p>
    </div>
  );
};

export default DucksComponent;
