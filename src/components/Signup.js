import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePost();
  };

  const handlePost = () => {
    axios.post("http://localhost:5005/posting", formData)
      .then(() => { 
        alert("Data saved");
      })
      .catch((e) => { 
        console.log(`Error: ${e}`);
      });
  };

  const formContainerStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    margin: 'auto'
  };

  const formGroupStyle = {
    marginBottom: '1rem'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    color: '#555'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    color: '#333',
    boxSizing: 'border-box'
  };

  const inputFocusStyle = {
    borderColor: '#007bff',
    outline: 'none',
    boxShadow: '0 0 4px rgba(0, 123, 255, 0.25)'
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: '#f7f7f7', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: '0' }}>
      <div style={formContainerStyle}>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Create Account</h2>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
              onBlur={(e) => e.target.style = inputStyle}
            />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
              onBlur={(e) => e.target.style = inputStyle}
            />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
              onBlur={(e) => e.target.style = inputStyle}
            />
          </div>
          <div className="form-group" style={formGroupStyle}>
            <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style = { ...inputStyle, ...inputFocusStyle }}
              onBlur={(e) => e.target.style = inputStyle}
            />
          </div>
          <button
            type="submit"
            className="signup-btn"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style = { ...buttonStyle, ...buttonHoverStyle }}
            onMouseOut={(e) => e.target.style = buttonStyle}
          >
            Sign Up
          </button>
          <br/>
          <p>Already have an account <a href="/signin">Login</a></p>
        </form>
      </div>
    </div>
  );
};
