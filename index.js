// map()
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

// End of map()

// unique vales
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

// map get all instances
const categories = menu.map(item => {
  return item.category
})
// End unique values
