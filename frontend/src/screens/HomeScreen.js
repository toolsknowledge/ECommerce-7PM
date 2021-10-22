//import React
//import useEffect hook
import React,{ useEffect } from "react";


//import following hooks
//useSelector
//useDispatch
//useSelector hook used to subscribe the result
//useDispatch hook used to perform the dispatch operation
import { useDispatch,useSelector } from "react-redux";



//import ProductsAction
import { ProductsActions } from "../actions/ProductsActions";

function HomeScreen(){
    const result = useSelector(state=>state.products);
    const {loading,products,error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ProductsActions());
    },[]);
    return(
        <React.Fragment>
            <h1>{JSON.stringify(loading)}....{JSON.stringify(products)}....{error}</h1>
        </React.Fragment>
    )
};

export default HomeScreen;

