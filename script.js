var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-background', {
    videoId: '51r-3IrowZc',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      playlist: '51r-3IrowZc',
      mute: 1,
      iv_load_policy: 3,
      start: 0
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}

var button = document.getElementById('customNowButton');

button.addEventListener('click', function () {
  window.location.href = 'form.html';
});
