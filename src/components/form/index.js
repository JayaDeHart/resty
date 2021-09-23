import React, { useState, useEffect } from 'react';

import './form.scss';

const Form = (props) => {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handleChange} />
          <button type="submit">GO!</button>
        </label>
        <div>
          <label className="methods">
            <span>GET</span>
            <input
              type="radio"
              name="method"
              value="get"
              onChange={handleChange}
            />
          </label>
          <label className="methods">
            <input
              type="radio"
              name="method"
              value="post"
              onChange={handleChange}
            />
            <span>POST</span>
          </label>
          <label className="methods">
            <input
              type="radio"
              name="method"
              value="put"
              onChange={handleChange}
            />
            <span>PUT</span>
          </label>
          <label className="methods">
            <input
              type="radio"
              name="method"
              value="delete"
              onChange={handleChange}
            />
            <span>DELETE</span>
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
