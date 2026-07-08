import { useState } from 'react'
import Person from './components/Person.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import People from './components/People.jsx'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setNewSearchName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const duplicateName = persons.find(person => person.name === newName)
    if (duplicateName !== undefined){
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const namesToShow = searchName
    ? persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} setSearchName={setNewSearchName}/>

      <h3>add a new</h3>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} 
      setNewName={setNewName} setNewNumber={setNewNumber}/>

      <h2>Numbers</h2>
      <People persons={namesToShow} />
    </div>
  )
}

export default App