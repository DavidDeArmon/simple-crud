import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class DeleteEmployee extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: +event.target.value });
  };
  handleSubmit = () => {
    const { id } = this.state;
    axios.delete("/employees/" + id).then(response => {
      this.setState({
        id: ""
      });
      this.props.updateList(response.data);
    });
  };
  render() {
    const { id } = this.state;
    return (
      <div >
        <h5>Delete Employee</h5>
        <div className="form-group">
          <label className="col-sm-1">Employee ID</label>
          <input onChange={this.handleChange} name="id" value={id} />
        </div>
        <button onClick={this.handleSubmit}>Delete</button>
      </div>
    );
  }
}

export default DeleteEmployee;
