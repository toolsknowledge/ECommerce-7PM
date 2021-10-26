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

//LoadingBox
import LoadingBox  from "../components/LoadingBox";

//import MessageBox
import MessageBox from "../components/MessageBox";


import Products from "../components/Products";


function HomeScreen(){
    const result = useSelector(state=>state.products);
    const {loading,products,error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(ProductsActions());
    },[]);
    return(
        <React.Fragment>
           {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
               <div className="container">
                   <header className="app-header">
                       <div>
                           <a href="#" className="brand">AshokIT</a>
                       </div>

                       <div>
                           <a href="#">cart</a>
                           <a href="#">signin</a>
                       </div>
                   </header>
                   <main className="main">
                      <Products products={products}></Products>
                   </main>
                   <footer className="footer">
                       copyright@ashokit.in
                   </footer>
               </div>
           )}
        </React.Fragment>
    )
};

export default HomeScreen;

