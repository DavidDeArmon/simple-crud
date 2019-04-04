import React, { Component } from "react";
import "./App.css";
import NewEmployee from "./NewEmployee";
import EditEmployee from "./EditEmployee";
import DeleteEmployee from "./DeleteEmployee";
import ViewEmployees from "./ViewEmployees";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      showOptions: false
    };
  }

  updateList = newEmployeeList => {
    //Used in each child component to update the list of employees which is then passed to ViewEmployees
    this.setState({ employees: newEmployeeList });
    console.log("updated list");
  };
  showOptionsToggle = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };
  render() {
    return (
      <div className="App">
        {this.state.showOptions && (
          <div>
            <NewEmployee updateList={this.updateList} />
            <EditEmployee updateList={this.updateList} />
            <DeleteEmployee updateList={this.updateList} />
          </div>
        )}
        <button onClick={this.showOptionsToggle}>Show/Hide Options</button>
        <ViewEmployees
          updateList={this.updateList}
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;
