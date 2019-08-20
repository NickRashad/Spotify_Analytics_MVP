import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TopResults from './TopResults.jsx';
import axios from 'axios';

const uploadJSON = (props) => {
  const [finalFile, setFinalFile] = useState({});
  const [ready, isReady] = useState(false);
  const [dataObj, setDataObj] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('/stream', {
      data: {finalFile}
    })
      .then(({data}) => setDataObj(data))
      .then(() => isReady(true))
  };

  const onChange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      setFinalFile(e.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input type="file" onChange={onChange} name="StreamingHistory" accept=".json" ></input>
        <input type="submit" value="Submit"></input>
      </form>
      { ready ? <TopResults data={dataObj} /> : null }
    </div>
  )
};

export default uploadJSON;