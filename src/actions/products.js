export const get_products = () => {
    return (dispatch, getState, { api }) => {
        const products = api.get_products()
        dispatch({
            type: 'PRODUCTS', payload: products
        })
    };
};
