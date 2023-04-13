
window.addEventListener('keydown', playSound)
window.addEventListener('touchstart',playSound)

function playSound(e) {
  let code = null;
  if (e.type === 'keydown') {
    code = e.code;
  } else if (e.type === 'touchstart') {
    code = e.target.getAttribute('data-key');
  }
  const audio = document.querySelector(`audio[data-key="${code}"]`)
  const key = document.querySelector(`.key[data-key=${code}]`)
  if (!audio) return
  audio.currentTime = 0;
  audio.play()
  key.classList.add('playing')
}

// use transition end event to stop animation
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransition))

function removeTransition (e) {
  if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}



