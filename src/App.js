import React, { Component } from "react";
import "./App.css";
import NewEmployee from './NewEmployee'
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import ViewEmployees from "./ViewEmployees";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }
  
  updateList=(newEmployeeList)=>{
    //Used in each child component to update the list of employees which is then passed to ViewEmployees
    this.setState({employees:newEmployeeList})
    console.log("updated list")
  }
  render() {
    return (
      <div className="App">
        <NewEmployee updateList={this.updateList}/>
        <EditEmployee updateList={this.updateList}/>
        <DeleteEmployee updateList={this.updateList}/>
        <ViewEmployees updateList={this.updateList} employees={this.state.employees}/>
      </div>
    );
  }
}

export default App;
