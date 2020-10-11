import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css';

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
  createData('Blogs', "https://medium.com/@shambhawi.kumari1393/"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className="contact-container">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell colSpan={2}>Other Contact Informations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><a href={row.detail} className="link-color">{row.detail}</a></TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
