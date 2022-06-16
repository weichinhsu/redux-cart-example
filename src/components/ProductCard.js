import React, { Component } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


class ProductCard extends Component {
    render() {
        return (
            <Card variant="outlined" style={{ width: '10vw' }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {this.props.data.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        $ {this.props.data.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => this.props.add(this.props.data)} size="small">Add</Button>
                </CardActions>
            </Card >
        )
    }
}

export default ProductCard
