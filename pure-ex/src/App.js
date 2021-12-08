import React, { Component, PureComponent } from "react";

class App extends PureComponent{
    constructor(){
      super();
      this.state = {
        num : 1
      }
    };
    componentDidMount(){
        setInterval(()=>{
            this.setState({
              num : 1
            })
        },1000);
    }
    render(){
      console.log("render function")
      return(
        <React.Fragment>
            <h1>{this.state.num}</h1>
        </React.Fragment>
      )
    }
};
export default App;