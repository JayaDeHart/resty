import React, { useState, useEffect, useReducer } from 'react';
import './form.scss';

const initialState = {
  method: 'get',
  url: '',
  data: '{}',
};

function formReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'SET_METHOD':
      return { ...state, method: payload };
    case 'SET_URL':
      return {
        ...state,
        url: payload,
      };
    case 'SET_BODY':
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

const Form = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleMethodChange(e) {
    e.preventDefault();
    let action = {
      type: 'SET_METHOD',
      payload: e.target.value,
    };
    dispatch(action);
  }

  function handleUrlChange(e) {
    e.preventDefault();
    let action = {
      type: 'SET_URL',
      payload: e.target.value,
    };
    dispatch(action);
  }

  function handleBodyChange(e) {
    e.preventDefault();
    let action = {
      type: 'SET_BODY',
      payload: e.target.value,
    };
    dispatch(action);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(state, 'form');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            data-testid="url-input"
            name="url"
            type="text"
            onChange={handleUrlChange}
          />
          <button data-testid="submit-button" type="submit">
            GO!
          </button>
        </label>
        <div>
          <input
            type="button"
            name="method"
            value="get"
            onClick={handleMethodChange}
          />
          <input
            type="button"
            name="method"
            value="post"
            onClick={handleMethodChange}
          />
          <input
            type="button"
            name="method"
            value="put"
            onClick={handleMethodChange}
          />
          <input
            type="button"
            name="method"
            value="delete"
            onClick={handleMethodChange}
          />
        </div>
        <label>JSON body</label>
        <textarea cols={50} name="body" onChange={handleBodyChange} />
      </form>
    </>
  );
};

export default Form;
