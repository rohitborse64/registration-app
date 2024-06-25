import React, { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    isActive: false,
  });

  const [records, setRecords] = useState(null);
  
  const handleChangeInput = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    //console.log(name,value);

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? "checked" :value,
    })

  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

      // Validate phone number and email
      const phoneRegex = /^[\d]+$/;
    if (formData.phoneNumber.length !== 10 || (!phoneRegex.test(formData.phoneNumber))) {
      alert('Enter valid Phone number');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Invalid email format');
      return;
    }

    
    //const newRecords = {...formData, id: new Date().getTime().toString()}
    //setRecords([...records, newRecords]);
    //console.log(records);

    const newRecords = {...formData}
    //setRecords(newRecords[]);

    setFormData({firstName:"",lastName:"",phoneNumber:"",email:"",gender:"",isActive:false});
    
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      gender: '',
      isActive: false,
    });
    //setRecords([]);
  };

  return (
    <div className="container mx-auto my-3 p-3 w-25">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={formData.firstName}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={formData.lastName}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChangeInput}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            className="form-control"
            value={formData.gender}
            onChange={handleChangeInput}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChangeInput}
            />{" "}
            Active User
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Regiter
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2 my-2"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>

      {/* {formData && (
        <div className="mt-3">
          <h3>Submitted Data:</h3>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Email: {formData.email}</p>
          <p>Gender: {formData.gender}</p>
          <p>Active User: {formData.isActive ? "Yes" : "No"}</p>
        </div>
      )} */}

      <Link to="/" className="btn btn-link mt-3">
        Back to Home
      </Link>
    </div>
  );

}

export default Registration;
