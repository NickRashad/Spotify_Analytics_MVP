import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const topResults = (props) => {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  useEffect(()=> {
    axios.get('/topResults')
      .then(({data}) => {
        setTracks(data.bestTracks);
        setArtists(data.topArtists);
      });
  });

  return(
    <div>
      <ol>
        { artists.length > 0 &&
          artists.map((artist) => (
            <li>{artist[0]} : {artist[1].count}</li>
          ))
        }
      </ol>

      <ul>
        { tracks.length > 0 &&
          tracks.map((track) => (
            <li>{track[1]} - {track[0]}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default topResults;