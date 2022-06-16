export const add_to_cart = (data) => {
    return (dispatch, getState, { api }) => {
        dispatch({
            type: 'ADD_PRODUCT', payload: data
        })
    }
}

export const increase_quality = (id) => {
    return (dispatch, getState, { api }) => {
        dispatch({
            type: 'INCREASE_QUANTITY', payload: id
        })
    }
}

export const decrease_quality = (id) => {
    return (dispatch, getState, { api }) => {
        const product = getState().cart.find(prod => prod.id === id)
        if (product.count === 1) {
            dispatch({
                type: 'DELETE_PRODUCT', payload: id
            })
        } else {
            dispatch({
                type: 'DECREASE_QUANTITY', payload: id
            })
        }
    }
}

export const remove_product = (id) => {
    return (dispatch, getState, { api }) => {
        dispatch({
            type: 'DELETE_PRODUCT', payload: id
        })
    }
}