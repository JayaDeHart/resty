import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return (
    <section>{props.data ? <ReactJson src={props.data} /> : null}</section>
  );
};

export default Results;
