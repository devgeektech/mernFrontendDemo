import React from 'react';
import Skeleton from 'react-loading-skeleton';

const getColumns = (count) => {
  const columns = [];
  for (let i = 0; i < count; i++) {
    columns.push(
      <th key={i}>
        <Skeleton color="#e5e9ef" height={'25px'} />
      </th>
    );
  }
  return columns;
};
const getRows = (columnCount, rowCount) => {
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const columns = [];
    for (let j = 0; j < columnCount; j++) {
      columns.push(
        <td key={`${i}-${j}`}>
          <Skeleton color="#e5e9ef" />
        </td>
      );
    }
    rows.push(<tr key={i}>{columns}</tr>);
  }
  return rows;
};
export const TableLoader = ({ columns = 5, rows = 5 }) => (
  <>
    <table className="scroll" width="100%" cellSpacing="0">
      <thead className="thead-dash">
        <tr>{getColumns(columns)}</tr>
      </thead>

      <tbody className="tbody-dash">{getRows(columns, rows)}</tbody>
    </table>
  </>
);
