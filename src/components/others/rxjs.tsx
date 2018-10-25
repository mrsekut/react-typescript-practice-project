import * as React from 'react';
import { interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const RxjsComponent: React.SFC<{}> = () => {
  interval(1000)
    .pipe(
      filter(x => x % 2 === 1),
      map(x => x + x)
    )
    .subscribe(x => console.log(x));

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default RxjsComponent;
