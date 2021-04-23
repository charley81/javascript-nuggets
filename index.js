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

// =========== end destructuring ==========
