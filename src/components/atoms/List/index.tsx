import * as React from 'react';

interface ListProps<T> {
  renderRow: (row: T, idx?: number) => void;
  data: T[];
  empty: React.ReactChild;
}

type ListComponent = <T>(
  props: ListProps<T>
) => React.ReactElement<ListProps<T>>;

const List: ListComponent = ({ renderRow, data, empty }) => (
  <>
    {data.length ? data.map((row, index) => renderRow(row, index)) : { empty }}
  </>
);
export default List;
