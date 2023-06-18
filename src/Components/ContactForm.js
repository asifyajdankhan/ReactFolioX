import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 1rem;
  }
  label {
    font-size: 2.5rem;
  }
  p {
    color: red;
    margin-top: 0;
    font-size: 20px;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const initialValue = { username: '', email: '', message: '' };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = 'Username is required!';
    }
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.message) {
      errors.message = 'Message is required';
    } else if (values.message.length < 4) {
      errors.message = 'Message must be more than 4 characters';
    } else if (values.message.length > 50) {
      errors.message = 'Message cannot exceed more than 50 characters';
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log('You clicked submit.');
  };
  return (
    <div>
      <FormStyles>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </label>
          </div>
          <p>{formErrors.username}</p>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <p>{formErrors.email}</p>
          <div className="form-group">
            <label htmlFor="message">
              Your Message
              <textarea
                type="text"
                id="message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
            </label>
          </div>
          <p>{formErrors.message}</p>
          <button type="submit">Send</button>
        </form>
      </FormStyles>
    </div>
  );
}
