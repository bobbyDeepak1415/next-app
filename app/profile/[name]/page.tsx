 const users=[
        {id:1,name:"bobby",email:"bobby.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:2,name:"deepak",email:"deepak.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:3,name:"Leo",email:"leo.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:4,name:"King",email:"king.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
    ]

    type ProfilePageProps={
        params:Promise<{name:string}>
    }
export default async function ProfilePage({params}:ProfilePageProps){

const pageParams=await params

const username=pageParams.name

const user=users.find((user)=>user.name.toLocaleLowerCase()===username.toLocaleLowerCase())

if(!user){
    return <h1>User not found</h1>
}

return (
    <div>
    <h1>This is {user?.name}'s Profile</h1>
    <p>Email: {user?.email}</p>
    <p>Bio:{user?.bio}</p>
    </div>
)
}

