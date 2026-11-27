'use client'
import { useState } from "react"



type User={
  name:string,
  id:number,
  username:string
}

export default function FilterUsers({users}:{users:User[]}){


    const [searchTerm,setSearchTerm]=useState("")

    const filteredNames=users.filter((u)=>u.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


    return (
        <div>
          <label htmlFor="search-input">Search Here:</label>
      <input id="search-input" className="border" type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

        <ul>
             {filteredNames.map((user:User)=>{
                 return <li key={user.id}>{user.name}</li>
                })}
        
        </ul>
                </div>
    )

}