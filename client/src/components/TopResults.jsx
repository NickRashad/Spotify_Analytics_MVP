import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const topResults = (props) => {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(()=> {
    axios.get('/topResults')
    .then(({data}) => setArtists(data.topArtists))
    // .then(({ data }) => console.log(data));
  });

  return(
    <div>
      <ol>

      { artists.length > 0 &&
        artists.map((artist, index) => (
          <li>{artist[0]} : {artist[1].count}</li>
        ))
      }

      </ol>
    </div>
  );
};

export default topResults;