import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    //take each form's input and update state object
  }

  function handleSubmit(e) {
    //todo: validate formdata
    e.preventDefault();
    props.handleSubmit(formData);
  }

  //onclick={changemethod()}

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
            <input
              type="radio"
              name="method"
              value="get"
              onChange={handleChange}
            />
            <span>GET</span>
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
