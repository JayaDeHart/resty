import React, { useState } from 'react';

import './form.scss';

const Form = (props) => {
  const { callApi, setUrl, changeMethod, url } = props;

  return (
    <>
      <form onSubmit={callApi}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            value={url}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span
            onClick={(e) => {
              changeMethod(e.target.id);
            }}
            id="get"
          >
            GET
          </span>
          <span
            onClick={(e) => {
              changeMethod(e.target.id);
            }}
            id="post"
          >
            POST
          </span>
          <span
            onClick={(e) => {
              changeMethod(e.target.id);
            }}
            id="put"
          >
            PUT
          </span>
          <span
            onClick={(e) => {
              changeMethod(e.target.id);
            }}
            id="delete"
          >
            DELETE
          </span>
        </label>
      </form>
    </>
  );
};

export default Form;
