import React from 'react';
import { Table } from 'react-bootstrap';

export const MyTable = ({ board, type }) => {
  return (
    <Table className={type}>
      <thead>
        <tr>
          <th id='thcr'>colum/row</th>
          <th id='th0'>0</th>
          <th id='th1'>1</th>
          <th id='th2'>2</th>
          <th id='th3'>3</th>
          <th id='th4'>4</th>
          <th id='th5'>5</th>
          <th id='th6'>6</th>
          <th id='th7'>7</th>
          <th id='th8'>8</th>
        </tr>
      </thead>
      <tbody>
        {board.map((row, index) => (
          <tr
            className={`row-${index}`}
            key={`row-${index}-${type}`}
            style={{ fontWeight: 'bold' }}
          >
            <td> {index}</td>
            {row.map((col, index) => (
              <td className={`col-${index}`} key={`col-${index}-${type}`}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
