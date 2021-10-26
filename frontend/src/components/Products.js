import React from "react";
function Products(props){
    return(
        <React.Fragment>
            <p style={{color:"red"}}>{JSON.stringify(props.products)}</p>
        </React.Fragment>
    )
}
export default Products;