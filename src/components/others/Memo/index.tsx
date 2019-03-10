import * as React from 'react';

export default () => {
  const { useState, useMemo } = React;
  const [count, setCount] = useState(0);
  const newValue = useMemo(
    () => {
      console.log("Don't you forget?", count);

      return `${count}　push`;
    },
    [count]
  );

  console.log(newValue);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        \owo/ {'<'} {count} times!
      </button>
    </div>
  );
};
