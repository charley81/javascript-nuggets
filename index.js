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

// =========== end dynamic object keys ==========
