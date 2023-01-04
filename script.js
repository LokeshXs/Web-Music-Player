// let progress = document.getElementById("progress");
let progress = document.querySelector('#progress');
// let song = document.getElementById("song");
let song = document.querySelector("#song");
// let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlIcon = document.querySelector('#ctrlIcon');

let playIcon = document.querySelector('.play-icon');

let like = document.querySelector('.fa-heart');

let video = document.querySelector('#video');

let songVolume = document.querySelector('.volume-function');

let volumeIcon = document.querySelector('.volume-icon');

let volumeBox = document.querySelector('.volume-box');

//When song is loaded
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  songVolume.max = song.volume;
};


playIcon.addEventListener("click", function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
    video.play();
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    video.pause();
  }
})

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime === song.duration) {
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
      video.pause();

    }
  }, 1000);
}

//On changing the progress bar
progress.onchange = function () {
  song.currentTime = progress.value;
};


//Changing Volume
songVolume.addEventListener('input', function () {
  song.volume = songVolume.value;
});



like.addEventListener('click', function () {
  if (like.classList.contains('fa-heart2')) {
    like.classList.remove('fa-heart2');
  } else {
    like.classList.add('fa-heart2');
  }
})

volumeIcon.addEventListener('click', function () {
  if (volumeIcon.classList.contains('volume-icon2')) {
    volumeIcon.classList.remove('volume-icon2');
    volumeIcon.style.marginLeft = '0'
    volumeBox.style.display = 'flex';
  } else {
    volumeIcon.classList.add('volume-icon2');
    volumeIcon.style.marginLeft = '79.2%'
    volumeBox.style.display = 'none';
  }
})

