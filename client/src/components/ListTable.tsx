import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { TableBodys, TableHeads } from './UIKit';
import { Task } from '../assets/ts/type';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface Props {
    headers: string[]
    bodies: Task[]
    handleOpen: () => void
}

const BasicTable = (props: Props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHeads headers={props.headers} />
        <TableBodys bodies={props.bodies} handleOpen={props.handleOpen} />
      </Table>
    </TableContainer>
  );
}

export default BasicTable;