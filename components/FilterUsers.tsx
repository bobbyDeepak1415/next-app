'use client'

import { useState } from "react"

export default function FilterUsers(){

    const [name,setName]=useState("")

    return (
        <ul>
             {users.map((user:User)=>{
        return <li key={user.id}>{user.name}</li>
      })}
        
        </ul>
    )

}