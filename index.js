// =========== map() ==========
const people = [
  {
    name: 'john',
    age: 99,
    position: 'developer',
  },
  {
    name: 'jane',
    age: 88,
    position: 'designer',
  },
  {
    name: 'chris',
    age: 77,
    position: 'ceo',
  },
]

const newPeople = people.map(person => {
  return {
    fistName: person.name.toUpperCase(),
    age: person.age + 20,
  }
})

// =========== end of map() ==========

// =========== unique values ==========
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
]
// map get all instances of category
// new Set - narrow down
// ['all',...] - turn it bact to array
const categories = [...new Set(menu.map(item => item.category))]
// =========== end unique values ==========

// =========== dynamic object keys ==========
// dot notation
const person = {
  name: 'john',
}

person.age = 25

// square bracket notation
const items = {
  'featured-items': ['item 1', 'item 2'],
}

let appState = 'loading'
appState = 'hello'
const keyName = 'computer'

const app = {
  [appState]: true,
}

app[keyName] = 'apple'

const state = {
  loading: true,
  name: '',
  job: '',
}

function updateState(key, value) {
  state[key] = value
}

updateState('name', 'jaime')
updateState('loading', false)
updateState('job', 'developer')
updateState('products', [])

// =========== end dynamic object keys ==========

// =========== filter and find ==========
// filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// find - returns a single instance (object), returns first match, if no match - undefined

const people2 = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'peter',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susie',
    age: 30,
    position: 'CTO',
  },
  {
    name: 'anna',
    age: 35,
    position: 'intern',
  },
]

// filter
const youngPeople = people2.filter(person => person.age < 31)
const developers = people2.filter(person => person.position === 'developer')

// no match - get back empty array
const seniorDevs = people2.filter(person => person.position === 'senior dev')

// find
const peter = people2.find(person => person.name === 'peter')

// no match
const oldPerson = people2.find(person => person.age > 35)

// multiple matches - first match
const randomPerson = people2.find(person => person.age < 35)

const anna = people2.filter(person => person.name === 'anna')
// console.log(anna[0].position)
// =========== end filter and find ==========

// =========== reduce ==========
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('cur') - current iteration/value

const staff = [
  {
    name: 'bob',
    position: 'developer',
    salary: 100,
  },
  {
    name: 'peter',
    position: 'designer',
    salary: 300,
  },
  {
    name: 'susie',
    position: 'CTO',
    salary: 400,
  },
  {
    name: 'anna',
    position: 'intern',
    salary: 10,
  },
]

const totalSalary = staff.reduce((acc, cur) => {
  acc += cur.salary
  return acc
}, 0)

// =========== end reduce ==========

// =========== destructuring ==========
// faster/easier way to access/unpack variables from arrays, objects

// array destructuring
const fruits = ['orange', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

const [friend1, friend2, friend3, friend4, friend5] = friends

// only get certain ones just skip with a comma
const [enemy, , bob, , kelly, susan] = friends
// console.log(enemy, bob, kelly, susan)

let first = 'bob'
let second = 'john'
// let temp = second
// second = first
// first = temp

// object destructuring
const bib = {
  first1: 'bib',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
}

const {
  first1,
  last,
  city,
  siblings: { sister },
} = bib
// console.log(first1, last, city, sister)

function printPerson({ first1, last, city, siblings: { sister } }) {
  // console.log(first1, last, city, sister)
}

printPerson(bib)

// =========== end destructuring ==========

// =========== spread operator ==========
// allows and iterable to spread/expand individually inside receiver
// split into single items and COPY them

const udemy = 'udemy'
const letters = [...udemy]

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friendz = [...boys, ...girls, bestFriend]

// reference
// const newFrienz = friendz
// newFrienz[0] = 'nancy'
// console.log(newFrienz, friendz)

// copy
const newFrienz = [...friendz]
newFrienz[0] = 'nancy'
// console.log(newFrienz, friendz)

// ES2018 - ES8 Objects
const person2 = { name: 'mike', job: 'developer' }
const newPerson = { ...person2, city: 'charlotte', name: 'jim' }

// =========== end spread operator ==========

// =========== rest operator ==========
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits01 = ['apple', 'orange', 'lemon', 'banana']
const [first01, ...restOf] = fruits01

// objects
const thePerson = {
  name: 'John',
  lastName: 'Smith',
  job: 'Developer',
}

const { ...rest } = thePerson

// functions
const getAverage = (name, ...scores) => {
  const average =
    scores.reduce((total, item) => {
      return (total += item)
    }, 0) / scores.length
}

const testScores = [23, 45, 67, 89]
getAverage(thePerson.name, ...testScores)
// =========== end rest operator ==========

// =========== reduce ==========
// objects
// cart example
const cart = [
  {
    title: 'm-audio xyz 88key',
    price: 899.99,
    amount: 8,
  },
  {
    title: 'fender Live Bass Guitar',
    price: 1199.99,
    amount: 6,
  },
  {
    title: 'Technique 1200',
    price: 499.99,
    amount: 10,
  },
  {
    title: 'KRK 10" Sub',
    price: 299.99,
    amount: 5,
  },
  {
    title: 'Solid State Analog Desk',
    price: 59999.99,
    amount: 1,
  },
  {
    title: 'Shure 7m7b Mic',
    price: 399.99,
    amount: 8,
  },
]

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem
    // count items
    total.totalItems += amount
    // count sum
    total.cartTotal += amount * price
    return total
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
)
cartTotal = parseFloat(cartTotal.toFixed(2))
// console.log(total)
// console.log(totalItems, cartTotal)

// github repos example
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'

const fetchRecipes = async () => {
  const response = await fetch(url)
  const data = await response.json()
  const newData = data.reduce((total, repo) => {
    const { language } = repo
    if (language) {
      total[language] = total[language] + 1 || 1
    }

    return total
  }, {})
  console.log(newData)
}

fetchRecipes()

// =========== end rest reduce ==========
