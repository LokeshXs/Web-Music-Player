let progress = document.getElementById("progress");
let song = document.getElementById("song");
// let song = document.querySelector("#song");
let ctrlIcon = document.getElementById("ctrlIcon");

//When song is loaded
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};


function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if(song.currentTime === song.duration){
      ctrlIcon.classList.remove("fa-pause");
      ctrlIcon.classList.add("fa-play");
    }
  }, 1000);
}

progress.onchange = function(){
  song.currentTime = progress.value;
};


