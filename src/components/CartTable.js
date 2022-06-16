import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'


class CartTable extends Component {

    caculateTotal = () => {
        return this.props.cart.map(data => data.price * data.count)
            .reduce((tempSum, current) => current + tempSum, 0)
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Count</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.cart.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">
                                    <Button onClick={() => this.props.removeProduct(row.id)}>X</Button>
                                </TableCell>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">
                                    <Button onClick={() => this.props.decreaseQuality(row.id)} size="small">-</Button>
                                    {row.count}
                                    <Button onClick={() => this.props.increaseQuality(row.id)} size="small">+</Button>
                                </TableCell>
                                <TableCell align="center">{row.count * row.price}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3} />
                            <TableCell colSpan={1} align="center">Subtotal</TableCell>
                            <TableCell align="center">{this.caculateTotal()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default CartTable
