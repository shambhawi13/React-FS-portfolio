import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header:{
      backgroundColor: "darkgrey"
  }
});

function createData(name, detail) {
  return { name,detail };
}

const rows = [
  createData('Email', "shambhawi.kumari1393@gmail.com"),
  createData('LinkedIn', "https://www.linkedin.com/in/shambhawi-kumari/"),
  createData('Github', "https://github.com/shambhawi13/"),
  createData('Resume', "https://drive.google.com/file/d/1DXcJTZdgNrdJXd8yCEbqwDSRsmDeu2kv/view?usp=sharing"),
  createData('Blogs', "https://medium.com/@shambhawi.kumari1393/typescript-vs-javascript-dc1ed31bd95a?source=friends_link&sk=148bd5a4d4848b9e5c99c28c2237aad0"),
  createData('Facebook', "https://www.facebook.com/shambhawi.kumari.1/"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>Contact Info</TableCell>
            <TableCell align="right">Detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><a href={row.detail}>{row.detail}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
