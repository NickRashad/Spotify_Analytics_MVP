import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UploadJSON from './components/UploadJSON.jsx';
import TopResults from './components/TopResults.jsx';

const App = (props) => {
  return(
    <div>
      <h2>Your Personalized Spotify Metrics</h2>
      <p>Based on your own personal listening history, get your Top Tracks, Artists</p>
      <UploadJSON />
      {/* <TopResults /> */}
    </div>
  )
};

ReactDOM.render(<App /> ,document.getElementById('app'));