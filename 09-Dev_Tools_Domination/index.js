const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello')

    // Interpolated
    console.log('Hello I am a %s string!', '🥹')

    // Styled
    console.log('%c I am some great text','color: orange; font-size:50px;background:pink')

    // warning!
    console.warn('OH NO')

    // Error :|
    console.error('I ... am not error')

    // Info
    console.info('crocodiles eat 3-4 people per year')

    // Testing
    console.assert( 1 === 2, 'That is wrong')

    // clearing
    // console.clear()

    // Viewing DOM Elements
    const p = document.querySelector('p')
    console.log(p)
    console.dir(p)

    // Grouping together
    dogs.forEach( dog => {
      console.group(`${dog.name}`)
      console.log(`this is ${dog.name}`)
      console.log(`this is ${dog.age * 7} dog years old`)
      console.groupEnd(`${dog.name}`)
    })

    dogs.forEach( dog => {
      console.groupCollapsed(`${dog.name}`)
      console.log(`this is ${dog.name}`)
      console.log(`this is ${dog.age * 7} dog years old`)
      console.groupEnd(`${dog.name}`)
    })

    // counting
    console.count('apple')
    console.count('banana')
    console.count('apple')
    console.count('orange')
    console.count('apple')
    console.count('orange')
    console.count('banana')
    console.count('orange')

    // timing
    console.time('fetch data')
    fetch('http://api.github.com/users/wesbos')
      .then( data => data.json())
      .then(data => {
        console.timeEnd('fetch data')
        console.log(data)
      })

    console.table(dogs)
