//receive the id from HomeScreen
//send the id to the DetailsAction

import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import DetailsActions from "../actions/DetailsActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";


function DetailsScreen(props){
    const id = props.match.params.id;
    const result = useSelector(state=>state.details);
    const {loading,product,error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(DetailsActions(id))
    },[]);
    return(
        <React.Fragment>
            {!loading?<LoadingBox></LoadingBox>:error=="Network Error"?<MessageBox variant="danger">{error}</MessageBox>:(<div>
                <NavLink to="/" exact={true} strict><i className="fa fa-home" style={{color:"gray"}}></i></NavLink>
                 <div className="row top">
                    <div className="col-2">
                        <img src={product.image} className="large" alt={product.name}></img>
                    </div>
                    <div className="col-1">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                            </li>
                            <li>
                                Price: ${product.cost}
                            </li>
                            <li>
                                {product.description}
                            </li>
                        </ul>
                    </div>  
                    <div className="col-1">
                        
                    </div>
                 </div>
                {/* <h1>{JSON.stringify(product)}</h1> */}
            </div>)}
        </React.Fragment>
    )
}

export default DetailsScreen;