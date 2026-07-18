import Person from './Person.jsx'

const People = ({ persons, deleteHandler }) => {
    return (
        <div>
            {persons.map(person => (
                <Person key={person.id} person={person} deleteHandler={() => deleteHandler(person.id)}/>
            ))}
        </div>
    )
}

export default People