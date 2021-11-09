//receive the id from HomeScreen
//send the id to the DetailsAction

import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import DetailsActions from "../actions/DetailsActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";


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
                <h1>{JSON.stringify(product)}</h1>
            </div>)}
        </React.Fragment>
    )
}

export default DetailsScreen;