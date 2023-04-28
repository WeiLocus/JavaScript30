// TODO :start with strings, numbers and booleans
// number
let age = 100
let age2 = age
console.log('age', age)
console.log('age2', age2)

age = 200
console.log('age', age)
console.log('age2', age2)

// string
let user1 = 'cat'
let user2 = 'lol'
console.log( 'user1', user1)
console.log( 'user2', user2)
user1 = 'dog'

console.log( 'user1', user1)
console.log( 'user2', user2)

// we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log('players',players)
console.log('team',team)

// You might think we can just do something like this:
team[3] = 'Lux'
console.log('players',players)
console.log('team',team)

// however what happens when we update that array?
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// TODO :So, how do we fix this? We take a copy instead!
const team2 = players.slice()
team2[3] = 'Lux'
console.log('players',players)
console.log('team2',team2)

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players)

// or use the new ES6 Spread
const team4 = [...players]
team4[3] = 'Lux'
console.log('players',players)
console.log('team4',team4)

const team5 = Array.from(players)
team5[3] = 'Lux'
console.log('players',players)
console.log('team5',team5)
// now when we update it, the original one isn't changed

// TODO :The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person
captain.number = 99

console.log('person', person)
console.log('captain', captain)

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {name: 'lee', age: 30})

console.log('person', person)
console.log('captain2',captain2)

// We will hopefully soon see the object ...spread
const captain3 = {...person}
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const cat = {
  name: 'cat',
  age: 10,
  social: {
      twitter: '@caaaattt',
      facebook: 'caaaattt'
  } 
};

// const other = Object.assign({}, cat)
// other.social.twitter = '@account'
// console.log('other', other)
// console.log('cat', cat)


// Deep clone
const other2 = JSON.parse(JSON.stringify(cat))
other2.social.twitter = '@animal'
console.log('other2', other2)
console.log('cat', cat)


const number = document.querySelector('.copyNumber')
const array = document.querySelector('.copyArray')

number.innerHTML = `Result: age: ${age}、age2: ${age2}`
array.innerHTML = `Result: players: ${players} , team: ${team} `
