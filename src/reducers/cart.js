export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                {
                    ...action.payload,
                    count: 1
                }
            ]
        case 'INCREASE_QUANTITY':
            // let addedItem = state.find(item=> item.id === action.payload)
            // addedItem.count += addedItem.count
            state.map(prod =>
                prod.id === action.payload ? { ...prod, count: prod.count++ } : prod
            )
            return [
                ...state
            ]
        case 'DECREASE_QUANTITY':
            state.map(prod =>
                prod.id === action.payload ? { ...prod, count: prod.count-- } : prod
            )
            return [
                ...state
            ]
        case 'DELETE_PRODUCT':
            // const a = state.filter(prod =>
            //     prod.id !== action.payload
            // )
            return state.filter(prod =>
                prod.id !== action.payload
            )
        default:
            return state;
    }
};
