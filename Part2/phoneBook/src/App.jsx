import { useState, useEffect } from 'react'
import Person from './components/Person.jsx'
import Filter from './components/filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import People from './components/People.jsx'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setNewSearchName] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log(response.data)
      const people = response.data
      setPersons(people)
    })
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const duplicateName = persons.find(person => person.name === newName)
    if (duplicateName !== undefined){
      alert(`${newName} is already added to the phonebook`)
      return
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
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