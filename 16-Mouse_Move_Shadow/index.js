const hero = document.querySelector('.hero')
const text = document.querySelector('h1')
const walk = 300 

hero.addEventListener('mousemove', shadow)

function shadow(event) {
  console.log(event)
  // const width = hero.offsetWidth
  // const height = hero.offsetHeight
  const {offsetWidth: width, offsetHeight: height} = hero
  let { offsetX: x, offsetY: y} = event

  // if we hover h1 instead of the hero. modify the x,y value
  if ( this !== event.target) {
    x = x + event.target.offsetLeft
    y = y + event.target.offsetTop
  }
  console.log('x y:',x, y)
  const xWalk = Math.round((x / width * walk) - (walk /2))
  const yWalk = Math.round((y / height * walk) - (walk /2))
  console.log('xWalk yWalk', xWalk,yWalk)

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0px rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `
}