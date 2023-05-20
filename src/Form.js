import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [direction, setDirection] = useState('ltr');

  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
    document.dir = e.target.value;
  };

  const handleSubmit = (e) => {
    alert('Form submitted!');
  };

  const handleReset = () => {
    document.getElementById('contact-form').reset();
  };

  return (
    <div className="form">
      <button className="toggle-button" value={direction === 'ltr' ? 'rtl' : 'ltr'} onClick={handleDirectionChange}>
        {direction === 'ltr' ? 'RTL' : 'LTR'}
      </button>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='form-content'>
        <h2>Contact Us</h2>
        <div className="form-group inline">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />
        </div>
        <div className="form-group inline">
          <label htmlFor="zipcode">Zip Code:</label>
          <input type="text" id="zipcode" name="zipcode" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-group button-group">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
