interface Album {
  albumTitle: string;
  artistName: string;
  numOfTracks?: number;
}

function make_album(
  artistName: string,
  albumTitle: string,
  numOfTracks?: number
): Album {
  const obj: Album = {
    albumTitle,
    artistName,
  };

  if (numOfTracks) {
    obj.numOfTracks = numOfTracks;
  }

  return obj;
}

console.log(make_album('Ed Sheeran', 'Divide'));
console.log(make_album('Justin Bieber', 'My World 2.0'));
console.log(make_album('Travis Scott', 'Astro World', 7));
