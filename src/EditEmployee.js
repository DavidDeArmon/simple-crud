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
    const { id, fname, lname, email, phone, salary } = this.state;
    return (
      <form>
          <h5>Edit Employee</h5>
          <div className="form-group">
            <label className="col-sm-1">Employee ID</label>
            <input onChange={this.handleChange} name="id" value={id} />
            <label className="col-sm-1">First Name</label>
            <input onChange={this.handleChange} name="fname" value={fname} />
            <label className="col-sm-1">Last Name</label>
            <input onChange={this.handleChange} name="lname" value={lname} />
          </div>
          <div className="form-group">
            <label className="col-sm-1">Email</label>
            <input onChange={this.handleChange} name="email" value={email} />
            <label className="col-sm-1">Phone</label>
            <input onChange={this.handleChange} name="phone" value={phone} />
            <label className="col-sm-1">Salary</label>
            <input onChange={this.handleChange} name="salary" value={salary} />
          </div>
            <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default EditEmployee;
