
import FilteredUsers from '@/components/FilterUsers'
const Classroom = async () => {

  

  const response=await fetch("https://jsonplaceholder.typicode.com/users")

  const users=await response.json()


  return (
    <main>
<FilteredUsers users={users}/>

    </main>
  )
  
}

export default Classroom
