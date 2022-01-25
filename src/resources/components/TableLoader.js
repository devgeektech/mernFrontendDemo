import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TableLoader = (props) => {
  const { numOfrows = 10, cols = 6 } = props;
  let rowHtml = [];
  for (let i = 1; i <= numOfrows; i++) {
    let colHtml = [];
    for (let j = 1; j <= cols; j++) {
      colHtml.push(
        <td>
          <Skeleton />
        </td>
      );
    }
    rowHtml.push(<tr>{colHtml}</tr>);
  }
  return rowHtml;
};

export default TableLoader;
