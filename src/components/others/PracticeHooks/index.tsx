import * as React from 'react';
const { useState, useEffect } = React;

function useTimer(init, interval) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    setTimeout(setCount.bind(null, count + 1), interval);
  });

  return count;
}

const PracticeHooks: React.SFC<any> = ({}) => {
  const timeValue = useTimer(0, 100);
  return (
    <>
      <h1>useEffect() test</h1>
      <p>{timeValue}</p>
    </>
  );
};

export default PracticeHooks;
