import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../components/Registerform.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from 'axios';
import Toastmsg from "./Toast";
import { useParams } from "react-router-dom";
const Registerform = () => {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [date, setDate] = useState("");
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState("");
const { id } = useParams()


useEffect(() => {
    const fetchData = async () => {
       if (id) {
         try {
           const response = await axios.get(`http://localhost:8080/user/${id}`);
           const employee = response.data;
           setName(employee.name);
           setEmail(employee.email);
           setPhone(employee.phone);
           setDate(employee.date);
         } catch (error) {
           console.error("Failed to fetch employee data:", error);
         }
       }
    };
   
    fetchData();
   }, [id]);
   

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       let response;
       if (id) {
         response = await axios.put(`http://localhost:8080/update/${id}`, {
           name: name,
           email: email,
           phone: phone,
           date: date,
         });
       } else {
         response = await axios.post('http://localhost:8080/user', {
           name: name,
           email: email,
           phone: phone,
           date: date,
         });
       }
       console.log(response.data);
       setName("");
       setEmail("");
       setPhone("");
       setDate("");
       setToastMessage("Registration completed");
       setShowToast(true);
    } catch (error) {
       console.error("Failed to submit form:", error);
       setToastMessage("Failed to complete operation",error);
       setShowToast(true);
    }
   };
   
  return (
    <>
    <div className="contain">
    <div className="formreg">
        <h2>Register Customer</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Customer Name</label>
                <Form.Control
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label>Customer Email</label>
                <Form.Control
                    className="input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label>Customer Phone</label>
                <Form.Control
                    className="input"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div>
                <label>Customer Date</label>
                <Form.Control
                    className="input"
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <Button variant="outline-light" type="submit">Submit</Button>
            </div>
        </form>
    </div>
</div>
<Toastmsg show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />
    </>
  );
};

export default Registerform;
