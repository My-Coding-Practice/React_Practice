import React, { Component } from 'react';
export default class App extends Component{

   constructor(props) {
      super(props);
      this.state = {
        total: 0
      };
    }
  
   //  add = () => {
   //    this.setState({
   //      total: this.state.total + 1
   //    })
   //  }

   //  subtract = () => {
   //    this.setState({
   //      total: this.state.total - 1
   //    })
   //  }



   render(){
      return(
         <div>
            <h1>Hello World</h1>
            <p><b>Total: </b>{this.state.total}</p>
         </div>
      );
   }
}