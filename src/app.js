import React, { useState } from 'react';
import axios from 'axios';

import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';

const App = () => {
  const [data, setData] = useState();
  const [history, setHistory] = useState([]);

  const callApi = async (requestParams, origin) => {
    let response = await axios(requestParams);
    setData(response.data);
    if (origin == 'form') {
      setHistory([...history, requestParams]);
    }
  };

  return (
    <div>
      <Header />
      <History history={history} handleSubmit={callApi} />
      <Form handleSubmit={callApi} />
      <Results data={data} />
      <Footer />
    </div>
  );
};

export default App;
