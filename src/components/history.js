import React from 'react';

function history(props) {
  let { history, handleSubmit } = props;

  function onSubmit(index) {
    handleSubmit(history[index], 'history');
  }
  return (
    <>
      {history.map((request, index) => (
        <div data-testid="history-element" id={index}>
          <p>URL:{request.url}</p>
          <p>METHOD: {request.method}</p>
          <p>BODY: {request.data}</p>
          <button
            onClick={() => {
              onSubmit(index);
            }}
          >
            RUN
          </button>
        </div>
      ))}
    </>
  );
}

export default history;
