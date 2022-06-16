import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@mui/material/Grid'
import { increase_quality, decrease_quality, remove_product } from '../actions/cart'
import CartTable from '../components/CartTable'


class Cart extends Component {
    render() {
        return (
            <Grid item xs={6}>
                <CartTable
                    cart={this.props.cart}
                    increaseQuality={this.props.increaseQuality}
                    decreaseQuality={this.props.decreaseQuality}
                    removeProduct={this.props.removeProduct} />
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.cart ? state.cart : []
})

const mapDispatchToProps = {
    increaseQuality: increase_quality,
    decreaseQuality: decrease_quality,
    removeProduct: remove_product
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
