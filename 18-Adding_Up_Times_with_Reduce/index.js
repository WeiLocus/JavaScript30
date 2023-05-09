const timeNode = Array.from(document.querySelectorAll('[data-time]'))

console.log('timeNode',timeNode)

const seconds = timeNode
.map( node => {
  document.querySelectorAll('[data-time]').forEach( (item,i) => {
    item.innerHTML = `Video${i+1} <span>${item.dataset.time}</span>`
  })
  return node.dataset.time
})
.map( timeCode => {
  // destructure
  const [mins, secs] = timeCode.split(':').map(parseFloat)
  console.log(mins,secs)
  return (mins * 60) + secs
})
.reduce((total, vidSecond) => {
  return total + vidSecond
},0)

console.log('seconds',seconds)

let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600)
console.log('hours',hours)
secondsLeft = secondsLeft % 3600

const mins = Math.floor(secondsLeft / 60)
console.log('mins',mins)

secondsLeft = secondsLeft % 60

console.log('hh: mm: ss:',hours, mins, secondsLeft)

document.querySelector('.time').innerHTML = `總時長: ${hours}: ${mins}: ${secondsLeft}`