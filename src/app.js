import React, { useState } from 'react';
import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [body, setBody] = useState('');
  const [data, setData] = useState('');

  const callApi = async (requestParams) => {
    let response = await axios(requestParams);
    setData(response.data);
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {method} </div>
      <div>URL: {url} </div>
      <Form handleSubmit={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
