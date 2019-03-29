import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class NewEmployee extends Component {
  constructor() {
    super();
    this.state = {
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
    const { fname, lname, email, phone, salary } = this.state;
    axios
      .post("/employees", {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        salary: salary
      })
      .then(response => {
        this.setState({
          fname: "",
          lname: "",
          email: "",
          phone: "",
          salary: ""
        });
        this.props.updateList(response.data);
      });
  };
  render() {
    const { fname, lname, email, phone, salary } = this.state;
    return (
      <div className="form-group">
        <h5>New Employee</h5>
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

export default NewEmployee;
