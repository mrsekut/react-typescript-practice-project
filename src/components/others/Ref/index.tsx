import * as React from 'react';

export default () => {
  const inputEl = React.useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  React.useImperativeHandle(inputEl, () => ({
    focus: () => {
      console.log('focus');
    }
  }));

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>focus the input</button>
    </div>
  );
};
