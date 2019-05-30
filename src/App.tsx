import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import './App.css';

class App extends Component{


  
  // state = {
  //   someList: [
  //     {a: "b"}
  //   ],
  //   someVar: "a string"
  // }
  
  // fillList = () => {
  //   this.setState({
  //     someVar: "new string", 
  //     someList: [ 
  //       {d: "c"} 
  //     ]
  //   });
  //   console.log(this.state.someList)
  // }

  // scream = () => {
  //   alert("Aaaaaaaaaaaaaaa");
  // }

  render(){
    return (
         <div className="App">
          <UserOutput></UserOutput>
          <UserOutput></UserOutput>
         </div>
      );
  }

}

export default App;
