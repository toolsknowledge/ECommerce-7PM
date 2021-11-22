import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../actions/CartActions";
export default function CartScreen(props){
    const id = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1;
    const result = useSelector(state=>state.cart)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addToCart(id,qty));
    },[]);

    return(
        <React.Fragment>
            <h1>{JSON.stringify(result)}</h1>
        </React.Fragment>
    )
}
