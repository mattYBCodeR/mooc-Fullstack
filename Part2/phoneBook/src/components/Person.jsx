const Person = ({ person, deleteHandler }) => {
  return ( 
    <div>{person.name} {person.number} <button onClick={() => deleteHandler()}>Delete</button></div> 
  )
}

export default Person;
