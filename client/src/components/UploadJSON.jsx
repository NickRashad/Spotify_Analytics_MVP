import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const uploadJSON = (props) => {

  return (
    <form method="POST" enctype="multipart/form-data" >
      <input type="file" name="StreamingHistory" accept=".json" ></input>
      <input type="submit" value="Submit"></input>
    </form>
  )
};

export default uploadJSON;