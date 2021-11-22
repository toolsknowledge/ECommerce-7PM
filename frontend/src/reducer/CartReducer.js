import { ADD_ITEM } from "../constants/CartConstants"

const initialState = {
    cartItems:[]
}
export const CartReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_ITEM:
            const item = action.data;
            const existedItem = state.cartItems.find((element)=>{
                return element._id == item._id;
            });
            if(existedItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map((element)=>{
                        return element._id == item._id?item:element
                    })
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
        default:
            return state;
    }
}

























// import ADD_ITEM from "../constants/CartConstants";
// const initialState = {
//     cartItems : []
// };
// export const CartReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case ADD_ITEM:
//             const data = action.data;
//             const existedItem = state.cartItems.find((element)=>{
//                 return element.id == data.id
//             })
//             if(existedItem){
//                 return{
//                     ...state,
//                     cartItems : state.cartItems.map((element)=>{
//                         return element.id==data.id?data:element
//                     })
//                 }
//             }else{
//                 return{
//                     ...state,
//                     cartItems:[...state.cartItems,data]
//                 }
//             }
//         default:
//             return state;
//     }
// };