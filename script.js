const video = document.querySelector('video');
const progress = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackSpeedInput = document.querySelector('input[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

function handleVolumeChange() {
  video.volume = volumeInput.value;
}

function handlePlaybackSpeedChange() {
  video.playbackRate = playbackSpeedInput.value;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function rewind() {
  video.currentTime -= 10;
}

function fastForward() {
  video.currentTime += 25;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', () => (playButton.textContent = '❚ ❚'));
video.addEventListener('pause', () => (playButton.textContent = '►'));
video.addEventListener('timeupdate', handleProgress);

playButton.addEventListener('click', togglePlay);
volumeInput.addEventListener('input', handleVolumeChange);
playbackSpeedInput.addEventListener('input', handlePlaybackSpeedChange);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', fastForward);

skipButtons.forEach((button) => button.addEventListener('click', skip));
