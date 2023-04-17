const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = []

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change',displayMatches)
searchInput.addEventListener('keyup',displayMatches)

// change population format
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

axios.get(endpoint)
  .then((response) => {
    cities.push(...response.data)
  })
  .catch((error) => console.log(error))


function findMatches(keyword) {
  let filteredData = []
  filteredData = cities.filter((place) => {
    return place.city.toLowerCase().includes(keyword) || place.state.toLowerCase().includes(keyword)
  })
  return filteredData
}

function displayMatches() {
  const keyword = searchInput.value.trim().toLowerCase()
  const matchArray = findMatches(keyword)
  const htmlContent = matchArray.map(place => {
    const cityName = place.city.replace(new RegExp(keyword, 'gi'),`<span class="highlight">${keyword}</span>`)
    const stateName = place.state.replace(new RegExp(keyword, 'gi'),`<span class="highlight">${keyword}</span>`)
    return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `
  }).join('')
  suggestions.innerHTML = htmlContent
}

// solution2

// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data))

// function findMatches(wordToMatch, cities) {
//   return cities.filter( place => {

//     const regex = new RegExp(wordToMatch, 'gi')
//     return place.city.match(regex) || place.state.match(regex)
//   })
// }

// function displayMatches(e) {
//   const matchArray = findMatches(e.target.value, cities)
//   const htmlContent = matchArray.map(place => {
//     const regex = new RegExp(e.target.value, 'gi')
//     const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`)
//     const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`)
    
//     return `
//         <li>
//           <span class="name">${cityName}, ${stateName}</span>
//           <span class="population">${numberWithCommas(place.population)}</span>
//         </li>
//       `
//   }).join('')
//   suggestions.innerHTML = htmlContent
// }