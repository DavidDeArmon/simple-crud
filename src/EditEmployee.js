import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class EditEmployee extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      salary: 0
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    const { id, fname, lname, email, phone, salary } = this.state;
    axios
      .put("/employees", {
        id: id,
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        salary: salary
      })
      .then(response => {
        this.setState({
          id: "",
          fname: "",
          lname: "",
          email: "",
          phone: "",
          salary: 0
        });
        this.props.updateList(response.data);
      });
  };
  render() {
    const { id,fname, lname, email, phone, salary } = this.state;
    return (
      <div className="form-group">
        <h5>Edit Employee</h5>
        <label>Employee ID</label>
        <input onChange={this.handleChange} name="id" value={id} />
        <label>First Name</label>
        <input onChange={this.handleChange} name="fname" value={fname} />
        <label>Last Name</label>
        <input onChange={this.handleChange} name="lname" value={lname} />
        <label>Email</label>
        <input onChange={this.handleChange} name="email" value={email} />
        <label>Phone</label>
        <input onChange={this.handleChange} name="phone" value={phone} />
        <label>Salary</label>
        <input onChange={this.handleChange} name="salary" value={salary} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default EditEmployee;
