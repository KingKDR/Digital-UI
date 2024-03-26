import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import "../components/Empdata.css";

const Empdata = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users");
        setEmployees(response.data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contain">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <td>Sr No.</td>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            
            <tr key={index}>
            
              <td>{index + 1}</td>
              <td><Link to={`/about/${employee.id}`} style={{width:'1000px'}}>{employee.name}</Link></td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.date}</td>
            
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{textAlign:"center"}}>
            <h3>All the employees details displayed above</h3>
      </div>
    </div>
  );
};

export default Empdata;
