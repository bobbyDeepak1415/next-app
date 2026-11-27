
const Classroom = async () => {

  

  const response=await fetch("https://jsonplaceholder.typicode.com/users")

  const users=await response.json()

const filteredNames=users.filter((u:string)=>u.name.toLowerCase().includes(name.toLowerCase()))

  return (
    <main>
      <input value={name} onChange={(e)=>setName(e.target.value)}/>
<ul>

     
      </ul>
    </main>
  )
  
}

export default Classroom
