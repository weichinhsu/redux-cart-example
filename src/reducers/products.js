export default (state =  null , action) => {
    switch (action.type) {
        case 'PRODUCTS':
            return action.payload;
        default:
            return state;
    }
};
