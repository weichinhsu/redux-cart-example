import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { get_products } from '../actions/products'
import { add_to_cart } from '../actions/cart'
import ProductCard from '../components/ProductCard'


class Product extends Component {
    componentDidMount() {
        this.props.getProducts()
    }

    addHandler = (data) => {
        this.props.addToCart(data)
    }

    render() {
        return (
            <Grid item xs={6}>
                <Stack direction="row" spacing={2} >
                    {
                        this.props.products.map(data =>
                            <ProductCard key={data.id} data={data} add={this.addHandler} />
                        )
                    }
                </Stack>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products ? state.products : []
})

const mapDispatchToProps = {
    getProducts: get_products,
    addToCart: add_to_cart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
