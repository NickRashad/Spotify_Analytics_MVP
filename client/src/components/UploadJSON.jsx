import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const uploadJSON = (props) => {
  const [finalFile, setFinalFile] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('/test', {
      data: {finalFile}
    })
      .then(res => console.log(res))
  };

  const onChange = (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      console.log(e.target.result)
      setFinalFile(e.target.result);
    };
    var possible = reader.readAsText(file);
    // console.log(possible)
  };

  return (
    <form onSubmit={onSubmit} >
      <input type="file" onChange={onChange} name="StreamingHistory" accept=".json" ></input>
      <input type="submit" value="Submit"></input>
    </form>
  )
};

export default uploadJSON;