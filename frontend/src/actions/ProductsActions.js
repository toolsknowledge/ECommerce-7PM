import axios from "axios";
import { CATCH_ERROR, CATCH_PRODUCTS, HIT_SERVER } from "../constants/ProductsConstants";

export const listProducts = ()=>{
    return async (dispatch)=>{
        dispatch({type:HIT_SERVER,loading:false,products:[],error:""})
        try{
            const {data} = await axios.get(`http://localhost:8080/api/products`);
            dispatch({
                type:CATCH_PRODUCTS,
                error:"",
                products:data,
                loading:true
            })
        }catch(err){
           dispatch({type:CATCH_ERROR,loading:true,error:err.message,products:[]}); 
        }
    }
};