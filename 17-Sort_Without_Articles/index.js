const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

document.querySelector('#bands').innerHTML = bands.map(band => {
  return `<li>${band}</li>`
}).join('')

const sortBtn = document.querySelector('.action')
sortBtn.addEventListener('click',sortList)

function sortList() {
  const sortedBands = bands.sort(function(a,b) {
    return strip(a) > strip(b) ? 1 : -1
  })
  
  document.querySelector('.bands').innerHTML = sortedBands.map(band => {
  return `<li>${band}</li>`
  }).join('')
  
}

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim()
}