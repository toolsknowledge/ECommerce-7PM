import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
function App() {

  let [arr,setArr] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then((posRes)=>{
      const {data} = posRes;

      
          data.filter((element,index)=>{
            for(let key in element){
                if(key === "image"){
                  setArr(arr.push(element[key]))
                  return element[key];
                }
            }
        })
          console.log(arr);
      
    },(errRes)=>{

    });
    
  },[]);
  
    
  
  return (
    
    <div className="App">
        {arr.map((element,index)=>(
          <div key={index}>{element}</div>
        ))}
    </div>
  );
}

export default App;
