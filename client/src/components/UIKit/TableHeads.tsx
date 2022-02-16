import React from 'react'
import { TableCell, TableHead, TableRow } from '@material-ui/core'

interface Props {
    headers: string[]
}

const TableHeads = (props: Props) => {
    return (
        <>
            <TableHead>
                <TableRow>
                    {props.headers.map((head: string) => (
                        <TableCell align="left" key={head}>{head}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </>
    )
}

export default TableHeads