import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class ViewEmployees extends Component {
  componentDidMount() {
    axios.get("/employees").then(results => {
      this.props.updateList(results.data)
    });
  }
  render() {
    let employeeList = this.props.employees.map((employee, idx) => {
      return (
        <tr key={idx}>
          <th scope="row">{employee.id}</th>
          <td>{employee.first_name}</td>
          <td>{employee.last_name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.salary}</td>
        </tr>
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>{employeeList}</tbody>
      </table>
    );
  }
}

export default ViewEmployees;
