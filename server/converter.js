const topResults = (streamingHist) => {
  var allResults = {};
  for (var obj in streamingHist) {
    var artist = streamingHist[obj]['artistName'];
    var trackName =  streamingHist[obj]['trackName'];
    if (allResults[artist] === undefined) {
      allResults[artist] = {};
      allResults[artist]['count'] = 0;
      allResults[artist][trackName] = 0;
    } else {
      allResults[artist]['count'] += 1;
      if(allResults[artist][trackName] === undefined) {
        allResults[artist][trackName] = 0;
      } else {
        allResults[artist][trackName] += 1;
      }
    }
  }

  var topArtists = [];
  var bestTracks = []
  for(var artist in allResults){
    var count = allResults[artist]['count'];
    topArtists.push([artist, allResults[artist]]);

    for (var ish in allResults[artist]) {
      if(ish !== 'count' && allResults[artist][ish] > 15){
        bestTracks.push([
          artist, ish, allResults[artist][ish]
        ]);
      }
    }
  }
  topArtists = topArtists.sort((a,b) => b[1].count - a[1].count).filter((val, ind) => ind < 50);
  bestTracks = bestTracks.sort((a,b) =>  b[2] - a[2]).filter((val, ind) => ind < 50);
  return { bestTracks, topArtists }
};

module.exports = { topResults };