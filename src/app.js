import React, { useState } from 'react';

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
  const [data, setData] = useState('');

  const callApi = async () => {
    let requestParams = {
      //feed in url and method
    };
    let data = await axios(requestParams);

    //pipe data into results component
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {method} </div>
      <div>URL: {url} </div>
      <Form
        callApi={callApi}
        setUrl={setUrl}
        changeMethod={setMethod}
        url={url}
      />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
