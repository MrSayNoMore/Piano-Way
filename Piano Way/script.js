const playlistId = 'UUS7Ak4LVAfv9tM09Wi4_yVg';
const apiKey = 'AIzaSyBN9HeHhPnSnbjv-ZTc_2GLkNVLXmTjC6c';
const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const playlistItems = data.items;
    const playlistContainer = document.getElementById('playlistItems');

    playlistItems.forEach(item => {
      const title = item.snippet.title;
      const thumbnailUrl = item.snippet.thumbnails.medium.url;
      const videoId = item.snippet.resourceId.videoId;

      const videoElement = document.createElement('div');
      videoElement.innerHTML = `
        <h2>${title}</h2>
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
          <img src="${thumbnailUrl}" alt="${title}">
        </a>
      `;

      playlistContainer.appendChild(videoElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));