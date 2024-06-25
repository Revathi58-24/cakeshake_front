import React from 'react';

export const Contact = () => {
  const valid = (event) => {
    event.preventDefault();
    // Add form validation logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mt-5" id="contact">
      <form name="contactForm" onSubmit={valid} className="mx-auto" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <h3 className="text-center" style={{ color: 'lightcoral' }}>CONTACT US FOR ANY QUESTIONS</h3>
          <p className="text-center" style={{ color: 'rgb(28, 111, 83)', fontFamily: 'serif', fontSize: 'large' }}>
            We are committed to making the world a happier place, one cake at a time!<br />
            Reach out to us for orders and other queries.
          </p>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" className="form-control" style={{ width: '100%' }} name="firstName" id="firstName" pattern="[a-zA-Z]{3,}" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" className="form-control" style={{ width: '100%' }} name="lastName" id="lastName" pattern="[a-zA-Z]{1,}" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input type="email" className="form-control" style={{ width: '100%' }} name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Mobile:</label>
          <div className="input-group" style={{ width: '100%' }}>
            <div className="input-group-prepend">
              <span className="input-group-text">+91</span>
            </div>
            <input type="text" className="form-control" name="phone" id="phone" pattern="[0-9]{10}" required />
          </div>
        </div>
        <div className="form-group">
          <label>Gender:</label><br />
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="gender" value="male" id="male" />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="gender" value="female" id="female" />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea name="address" id="address" className="form-control" style={{ width: '100%' }} rows="3" required></textarea>
        </div>
        <div className="form-group">
          <label>Visit:</label><br />
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="visit" id="firstTime" value="firstTime" />
            <label className="form-check-label" htmlFor="firstTime">First time</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" name="visit" id="alreadyVisited" value="alreadyVisited" />
            <label className="form-check-label" htmlFor="alreadyVisited">Already visited</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" className="form-control" style={{ width: '100%' }} rows="3" required></textarea>
        </div><br />
        <div className="form-group text-center">
          <input type="submit" className="btn btn-primary" value="PROCEED" />
        </div>
      </form>
    </div>
  );
};
