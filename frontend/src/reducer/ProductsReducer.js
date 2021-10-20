import { CATCH_ERROR, CATCH_PRODUCTS, HIT_SERVER } from "../constants/ProductsConstants";

const initialState = {
    loading:false,
    products:[],
    error:""
}

export function ProductsReducer(state=initialState,action){
    switch(action.type){
        case HIT_SERVER:
        case CATCH_PRODUCTS:
        case CATCH_ERROR:
            return{
                ...state,
                loading:action.loading,
                products:action.products,
                error:action.error
            }

        default:
            return state;
    }
};