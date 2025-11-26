// Array of video sources
const videoSources = [
    "video/edu5.mp4",
    "video/edu1.mp4",
  ];

  // Get the video element
  const videoElement = document.getElementById('video-container');

  // Variable to track the current video index
  let currentVideoIndex = 0;

  // Function to load a video source
  function loadVideo(source) {
    videoElement.src = source;
    videoElement.play();
  }

  // Event listener for when the video ends
  videoElement.addEventListener('ended', function() {
    // Increment the video index
    currentVideoIndex++;

    // If we've reached the end of the videos, start from the beginning
    if (currentVideoIndex >= videoSources.length) {
      currentVideoIndex = 0;
    }

    // Load the next video
    loadVideo(videoSources[currentVideoIndex]);
  });

  // Load the first video when the page loads
  window.onload = function() {
    loadVideo(videoSources[currentVideoIndex]);
  };

  