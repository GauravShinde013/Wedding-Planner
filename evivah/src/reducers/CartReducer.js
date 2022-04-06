
const initState = {
    items: [

    ],
    total: 0

}
const cartReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const isItemExist = state.items.find(
                (i) => i.vendorServiceId === item.vendorServiceId
            );
            if (isItemExist) {
                return {
                    ...state,
                    items: state.items.map((i) =>
                        i.vendorServiceId === isItemExist.vendorServiceId ? item : i
                    ),
                };
            }
            else {

                return {
                    ...state,
                    items: state.items.concat(action.payload),
                    total: state.total + 1
                };
            }
        case "REMOVE_FROM_CART":
            return ({
                ...state,
                items: state.items.filter(item => item.vendorServiceId !== action.payload),
                total:state.total-1
            })
        
        case "EMPTY_CART":
            return({
                ...state,
                items:[],
                total:0
            })

        default:
            return state;
    }


}





export default cartReducer;