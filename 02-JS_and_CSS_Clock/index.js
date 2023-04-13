const  hourHand = document.querySelector('.hour-hand')
const  minHand = document.querySelector('.min-hand')
const  secondHand = document.querySelector('.second-hand')

setInterval(setTime, 1000)

function setTime() {
  const now = new Date()

  //second
  const seconds = now.getSeconds()
  // 加回樣式預設的90ded
  const secondDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondDegrees}deg)`

  //min
  const mins = now.getMinutes()
  const minDegrees = ((mins / 60) * 360) + 90
  minHand.style.transform = `rotate(${minDegrees}deg)`
  
  //hour
  const hours = now.getHours()
  const hourDegrees = ((hours / 60) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}