import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen', 159, 6.0, 24, 4.0, 356, 16.0, 49, 3.9),
  createData('Frozen', 159, 6.0, 24, 4.0, 356, 16.0, 49, 3.9),
  createData('Frozen', 159, 6.0, 24, 4.0, 356, 16.0, 49, 3.9),
  createData('Frozen', 159, 6.0, 24, 4.0, 356, 16.0, 49, 3.9),
  createData('Frozen', 159, 6.0, 24, 4.0, 356, 16.0, 49, 3.9),
];

export const DistributionTable = () => {
  return (
    <TableContainer sx={{ marginTop: "30px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Parent</TableCell>
            <TableCell align="right">Bable (1)</TableCell>
            <TableCell align="right">Bable (2)</TableCell>
            <TableCell align="right">Bable (3)</TableCell>
            <TableCell align="right">Bable (4)</TableCell>
            <TableCell align="right">Bable (5)</TableCell>
            <TableCell align="right">Bable (6)</TableCell>
            <TableCell align="right">Bable (7)</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};
