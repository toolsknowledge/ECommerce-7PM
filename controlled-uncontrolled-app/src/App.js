import React, { useState } from "react";

function App(){
    const [email,setEmail] = useState(null);
    return(
        <React.Fragment>
             <label>Email</label>
             <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </React.Fragment>
    )
}
export default App;