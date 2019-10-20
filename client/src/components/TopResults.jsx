import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const topResults = (props) => {
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(()=> {
    setTracks(props.data.bestTracks);
    setArtists(props.data.topArtists);
    console.log('Top Artists',props.data.topArtists)
    console.log('Top Tracks',props.data.bestTracks)
  },[]);

  return(
    <div className="tracks">
      <h3>Top Artists</h3>
      { artists.length > 0 &&
        artists.map((artist) => (
          <div key={artist[0]} className="artist">{artist[0]} : {artist[1].count}</div>
        ))
      }
      { tracks.length > 0 &&
        tracks.map((track) => (
          <div key={track[1]} className="track">{track[1]} - {track[0]}</div>
        ))
      }
    </div>
  );
};

export default topResults;