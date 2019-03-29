import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class DeleteEmployee extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: +event.target.value });
  };
  handleSubmit = () => {
    const { id } = this.state;
    axios
      .delete("/employees/" +id)
      .then(response => {
        this.setState({
          id: ""
        });
        this.props.updateList(response.data);
      });
  };
  render() {
    const { id } = this.state;
    return (
      <div className="form-group">
        <h5>Delete Employee</h5>
        <label>Employee ID</label>
        <input onChange={this.handleChange} name="id" value={id} />
        <button onClick={this.handleSubmit}>Delete</button>
      </div>
    );
  }
}

export default DeleteEmployee;
