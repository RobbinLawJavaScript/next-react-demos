import Paper from '@mui/material/Paper';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function BooksTable(props) {
    return <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Books in all Languages</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.books.map((book,index)=> {
            return <TableRow
              key={index}
            >
               <TableCell>
                  {book.title}
              </TableCell>
            </TableRow>
          })}
      </TableBody>
    </Table>
  </TableContainer>
}