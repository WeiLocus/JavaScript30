// TODO :get our video
const player =document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress =player.querySelector('.progress')
const progressBar =player.querySelector('.progress__filled')
const toggle =player.querySelector('.toggle')
const ranges =player.querySelectorAll('.player__slider')
const skipButtons =player.querySelectorAll('[data-skip]')
const fullScreenBtn = document.querySelector('.fullscreen')
const fullScreen = document.querySelector('#fullscreen')

// TODO :build out functions
function togglePlay() {
  console.log(this)
  // const method = video.paused ? 'play' : 'pause'
  // video[method]()
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

// toggle isPlay
function updateButton(e) {
  const icon = e.target.paused ? '►' : '❚ ❚';
  toggle.textContent = icon
}

// handle button
function skip(e){
  // console.log(e.target.dataset.skip)
  video.currentTime += parseFloat(e.target.dataset.skip)
  console.log(video.currentTime)
}

// handle input 
function handleRangeUpdate(e) {
  // console.log(e.target.value)
  // console.log(e.target.name)
  video[e.target.name] = e.target.value
}

//handle progress
function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

// handle progress click
function scrub(e) {
  // console.log(e.offsetX)
  // console.log('offsetWidth',progress.offsetWidth)
  const scrub = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrub
}

// TODO :hook up the  event listener

video.addEventListener('click',togglePlay)
video.addEventListener('play',updateButton)
video.addEventListener('pause',updateButton)
video.addEventListener('timeupdate',handleProgress)

toggle.addEventListener('click',togglePlay)

skipButtons.forEach( button => button.addEventListener('click',skip))

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate))

let mousedown = false
progress.addEventListener('click',scrub)
// progress.addEventListener('mousemove', () => {
//   if (mousedown) {
//     scrub()
//   }
// })
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))

progress.addEventListener('mousedown',() => mousedown = true)
progress.addEventListener('mouseup',() => mousedown = false)

// fullScreen
fullScreenBtn.addEventListener('click',openFullScreen)

function openFullScreen(){
  console.log('a')
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { 
    video.msRequestFullscreen();
  }
}

// fullScreenBtn.addEventListener('click', function (event) {
//   const fullscreenElement =
//     document.fullscreenElement ||
//     document.mozFullScreenElement ||
//     document.webkitFullscreenElement ||
//     document.msFullscreenElement;
//   if (fullscreenElement) {
//     exitFullscreen();
//   } else {
//     launchIntoFullscreen(fullScreen);
//   }
// });

// function launchIntoFullscreen(element) {
//   if (element.requestFullscreen) {
//     element.requestFullscreen();
//   } else if (element.mozRequestFullScreen) {
//     element.mozRequestFullScreen();
//   } else if (element.webkitRequestFullscreen) {
//     element.webkitRequestFullscreen();
//   } else if (element.msRequestFullscreen) {
//     element.msRequestFullscreen();
//   } else {
//     element.classList.toggle('fullscreen');
//   }
// }

// function exitFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.mozCancelFullScreen) {
//     document.mozCancelFullScreen();
//   } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen();
//   }
// }