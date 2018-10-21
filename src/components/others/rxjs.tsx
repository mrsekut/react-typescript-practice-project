import * as React from 'react';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

interface IProps {
  children: any;
  onClick?: () => void;
}

const RxjsComponent: React.SFC<IProps> = ({
  onClick,
  children,
  ...props
}: IProps) => <button onClick={onClick}>{children}</button>;

export default RxjsComponent;
