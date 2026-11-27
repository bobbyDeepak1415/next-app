'use client'
import { useState } from "react"



type User={
  name:string,
  id:number,
  username:string
}

export default function FilterUsers({users}:{users:User[]}){


    const [searchTerm,setSearchTerm]=useState("")

    const filteredNames=users.filter((u:string)=>u.name.toLowerCase().includes(name.toLowerCase()))


    return (
        <div>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

        <ul>
             {users.map((user:User)=>{
                 return <li key={user.id}>{user.name}</li>
                })}
        
        </ul>
                </div>
    )

}