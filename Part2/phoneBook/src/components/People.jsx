import Person from './Person.jsx'

const People = ({ persons }) => {
    return (
        <div>
            {persons.map(person => (
                <Person key={person.id} person={person} />
            ))}
        </div>
    )
}

export default People