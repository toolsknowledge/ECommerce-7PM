import React from "react";
function CartScreen(props){
   //CartScreen Receiving routing parameter and query parameter

   //Routing Parameter
   const id = props.match.params.id;

   //query parameter
   const qty = props.location.search?Number(props.location.search.split("=")[1]):1;

    return(
        <React.Fragment>
            <h1>{id}</h1>
            <h1>{qty}</h1>
        </React.Fragment>
    )
}
export default CartScreen;