import * as React from 'react';

interface ListProps<T> {
  renderRow: (row: T, idx?: number) => void;
  data: T[];
  empty: React.ReactChild;
}

type ListComponent = <T>(
  props: ListProps<T>
) => React.ReactElement<ListProps<T>>;

type GenericFC<P = {}> = Pick<
  React.FC<P>,
  'propTypes' | 'contextTypes' | 'defaultProps' | 'displayName'
> &
  ListComponent;

// type GenericFC<P = {}> = {
//   <T>(props: ListProps<T>, context?: any): React.ReactElement<T> | null;
//   x?: Pick<
//     React.FC<P>,
//     'propTypes' | 'contextTypes' | 'defaultProps' | 'displayName'
//   >;
// };

const List: GenericFC = ({ renderRow, data, empty }) => (
  <>
    {data.length ? data.map((row, index) => renderRow(row, index)) : { empty }}
  </>
);
export default List;
