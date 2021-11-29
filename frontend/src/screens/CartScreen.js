import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart, removeItemCart } from "../actions/CartActions";
import MessageBox from "../components/MessageBox";
export default function CartScreen(props){
    const id = props.match.params.id;
    const qty = props.location.search?Number(props.location.search.split("=")[1]):1;
    const result = useSelector(state=>state.cart)
    const {cartItems} = result;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(addToCart(id,qty));
    },[]);

    const removeFromCartHandler = (id)=>{
        dispatch(removeItemCart(id));
    }

    const checkoutHandler = ()=>{
        props.history.push("/register");
    }

    return(
        <React.Fragment>
            <div className="row top">
                <div className="col-2">
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0?(<MessageBox>Cart is Empty <NavLink to="/" exact={true} strict>Go For Shopping</NavLink></MessageBox>):(<div>
                        <ul>
                            {cartItems.map((item)=>(
                                <li key={item.id}>
                                    <div className="row">
                                        <div>
                                            <img src={item.image}
                                                  className="small"></img>
                                        </div>

                                        <div className="min-30">
                                            <NavLink to={`/details/${item._id}`} style={{color:"grey"}}>{item.name}</NavLink>
                                        </div>

                                        <div>
                                            <select
                                                value={item.qty}
                                                onChange={(e) =>
                                                    dispatch(
                                                    addToCart(item._id, Number(e.target.value))
                                                    )
                                                }
                                                >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                    </option>
                                                ))}
                                                </select>
                                        </div>

                                        <div>${item.cost}</div>

                                        
                                        <div>
                                            <button
                                            type="button"
                                            onClick={() => removeFromCartHandler(item._id)}
                                            >
                                            Delete
                                            </button>
                                        </div>




                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>)}
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                              <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                                {cartItems.reduce((a, c) => a + c.cost * c.qty, 0)}
                              </h2>
                            </li>
                            
                            <li>
                                <button
                                    type="button"
                                    onClick={checkoutHandler}
                                    className="primary block"
                                    disabled={cartItems.length === 0}
                                >
                                Proceed to Checkout
                            </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
           
        </React.Fragment>
    )
}
