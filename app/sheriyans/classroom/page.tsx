
type User={
  name:string,
  id:number
}

const Classroom = async () => {

  const response=await fetch("https://dummyjson.com/users")

  const users=await response.json()


  return (
    <main>
<ul>

      {users.map((user:User)=>{
        return <li key={user.id}>{user.name}</li>
      })}
      </ul>
    </main>
  )
  
}

export default Classroom
