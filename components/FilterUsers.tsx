'use client'
import { useState } from "react"



type User={
  name:string,
  id:number,
  username:string
}

export default function FilterUsers({users}:{users:User[]}){

    const [name,setName]=useState("")

    return (
        <ul>
             {users.map((user:User)=>{
        return <li key={user.id}>{user.name}</li>
      })}
        
        </ul>
    )

}