// use this js to create custom buttons and actions
// EXAMPLE CODE FOR CUSTOM VEDIO CONTROLS AND ACTIONS

var video = document.getElementById("video");
var progressLine = document.getElementById("progress-line");
var btn = document.getElementById("btn");

function togglePlayPause() {
  if (video.paused) {
    btn.className = "pause";
    video.play();
  } else {
    btn.className = "play";
    video.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};
