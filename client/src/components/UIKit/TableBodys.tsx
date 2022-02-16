import React from 'react'
import { TableBody, TableRow, TableCell } from '@material-ui/core'
import { Task } from '../../assets/ts/type'
import { getStatus } from '../../utils/status'
import { format } from 'date-fns'

interface Props {
  bodies: Task[]
  handleOpen: (data: Task) => void
}

const TableBodys = (props: Props) => {
  return (
    <TableBody>
        {props.bodies.map((data: Task) => (
            <TableRow key={'tableData' + data.id} onClick={() => props.handleOpen(data)}>
                <TableCell align="left">{data.title}</TableCell>
                <TableCell align="left">{getStatus(data.status)}</TableCell>
                <TableCell align="left">{format(data.start, "yyyy/MM/dd")}</TableCell>
                <TableCell align="left">{format(data.end, "yyyy/MM/dd")}</TableCell>
                {/* <TableCell align="right">{data.E}</TableCell> */}
            </TableRow>
        ))}
    </TableBody>
  )
}

export default TableBodys