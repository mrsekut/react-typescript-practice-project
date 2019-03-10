import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const modalRoot = document.getElementById('portal');

// const Modal: React.FC<any> = props => {
//   const { useEffect } = React;
//   const el = document.createElement('div');
//   useEffect(() => {
//     modalRoot.appendChild(el);
//   }, []);
//   return ReactDOM.createPortal(props.children, el);
// };

// export default Modal;

// const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('portal');

export default class Modal extends React.Component<any, any> {
  el: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
