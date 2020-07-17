import React, { Component } from "react";
import "./App.css";
import SmurfsList from'./SmurfsList';
import SmurfsForm from './SmurfsForm';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {//place to store your state in this component.
  //     smurfsList: [],
  //   };
  // };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList />
        <SmurfsForm />
      </div>
    );
  }
}

export default App;
