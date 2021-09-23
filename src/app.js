import React, { useState } from 'react';
import axios from 'axios';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {
  const [data, setData] = useState();

  const callApi = async (requestParams) => {
    let response = await axios(requestParams);
    setData(response.data);
  };

  return (
    <div>
      <Header />
      <div>hello!</div>
      <Form handleSubmit={callApi} />
      <Results data={data} />
      <Footer />
    </div>
  );
};

export default App;
