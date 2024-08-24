import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Product Name', minWidth: 170 },
  { id: 'code', label: 'Product Code', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'price',
    label: 'Price ($)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  },
  {
    id: 'totalValue',
    label: 'Total Value ($)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
  },
];

function createData(name, code, quantity, price) {
  const totalValue = quantity * price;
  return { name, code, quantity, price, totalValue };
}

const rows = [
  createData('Laptop', 'LP001', 50, 1200),
  createData('Smartphone', 'SP002', 100, 800),
  createData('Tablet', 'TB003', 75, 450),
  createData('Smartwatch', 'SW004', 150, 250),
  createData('Headphones', 'HP005', 200, 150),
  createData('Monitor', 'MN006', 40, 300),
  createData('Keyboard', 'KB007', 150, 60),
  createData('Mouse', 'MS008', 180, 25),
  createData('Printer', 'PR009', 30, 200),
  createData('Webcam', 'WC010', 80, 100),
  createData('Router', 'RT011', 60, 120),
  createData('External Hard Drive', 'HD012', 50, 90),
  createData('USB Flash Drive', 'FD013', 300, 15),
  createData('Speakers', 'SPK014', 70, 180),
  createData('Gaming Console', 'GC015', 45, 500),
];

export default function ProductList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
