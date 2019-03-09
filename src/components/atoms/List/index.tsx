import * as React from 'react';

interface ListProps {
  renderRow: (row: any, index: number) => void;
  data: any[];
  empty: React.ReactChild;
}

const List: React.FC<ListProps> = ({ renderRow, data, empty }) => (
  <>
    {!!data ? (
      data.map((row, index) => renderRow(row, index))
    ) : (
      <div>{empty}</div>
    )}
  </>
);
export default List;
