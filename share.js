const { google } = require('googleapis');

const youtube = google.youtube('v3');

const apiKey = "AIzaSyCwvUaVSqnbVFIrf8oObCz0TWiTmRfBkaI"; // Replace with your actual API key
const auth = {
  headers: {
    Authorization: 'Bearer AIzaSyBm5mOkLCuiEwtrJ2NB383pu2H3jJu7rZE',
  },
};

const playlistId = 'PLhYasOzrPengVM93U8oYy_2m0mGiTxiDJ'; // Replace with your actual playlist ID

const videoId = 'geZsKnwicUk'; // Replace with the actual video ID
const emailAddress = 'i.aboelsoud21@gmail.com'; // Replace with the actual email address

const grantViewerAccess = async () => {
  // Add the video to the playlist if it's not already there
  const playlistItem = await youtube.playlistItems.list({
    part: 'snippet',
    playlistId,
    resourceId: {
      kind: 'youtube#video',
      videoId,
    },
  }, auth).then(response => response.data.items[0]);
  console.log(playlistItem)
  if (!playlistItem) {
    await youtube.playlistItems.insert({
      part: 'snippet',
      body: {
        snippet: {
          playlistId,
          resourceId: {
            kind: 'youtube#video',
            videoId,
          },
        },
      },
    }, auth);
  }


};

const main = async () => {
  await grantViewerAccess();
};

main();
