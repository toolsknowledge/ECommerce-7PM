import axios from "axios";
import { LIST_PRODUCTS,
         LIST_PRODUCTS_SUCCESS,
         LIST_PRODUCTS_FAIL } from "../constants/ProductsConstant";
export const ProductsActions = ()=>{
    return async (dispatch)=>{
        dispatch({
            type:LIST_PRODUCTS,
            loading:false,
            products:[],
            error:""
        });
        try{
            const {data} = await axios.get(`http://ecommerce7pm-env.eba-hsf8dhev.ap-south-1.elasticbeanstalk.com/api/products`);
            dispatch({
                type:LIST_PRODUCTS_SUCCESS,
                error:"",
                loading:true,
                products:data
            })
        }catch(err){
            dispatch({
                type:LIST_PRODUCTS_FAIL,
                loading:true,
                products:[],
                error:err.message
            })
        }
    }
};