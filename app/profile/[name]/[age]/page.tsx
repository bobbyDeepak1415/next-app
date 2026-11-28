
type ProfilePageAgeProps={
    params:Promise<{name:string,age:number}>
}


export default async function ProfilePage({params}:ProfilePageAgeProps){

 const users=[
        {id:1,name:"bobby",age:20,email:"bobby.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:2,name:"bobby",age:30,email:"bobby.mukiri@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:3,name:"bobby",age:40,email:"bobby.leo@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:4,name:"bobby",age:40,email:"bobby.king@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
    ]

    const pageParams=await params

    const userName=pageParams.name
    const userAge=pageParams.age

    const user=users.find((user)=>user.age.toString()===userAge.toString() && user.name.toLocaleLowerCase()===userName.toLocaleLowerCase())

    if(!user){
       return <h2>User not found</h2>
    }

    return (
    <div>

        <h1>Username:{user.name}</h1>
        <p>User email:{user.email}</p>
        <p>User age:{user.age}</p>
        <p>User Bio:{user.bio}</p>
    
    </div>
)
}