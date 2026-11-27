
type ProfilePageProps={
    params:Promise<{name:string}>
}

export default async function ProfilePage({params}:ProfilePageProps){

     const users=[
        {id:1,name:"bobby",email:"bobby.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:2,name:"deepak",email:"deepak.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:3,name:"Leo",email:"leo.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
        {id:4,name:"King",email:"king.deepak@gmail.com",bio:"Loem ipsum dolor sit amet consectetur adipisicing elit. Provident, corporis!"},
    ]

const pageParams=await params

const username=pageParams.name

const user =users.find(user=>user.name.toLocaleLowerCase() === username.toLocaleLowerCase())

    return (
        <div>
            <h2>{user?.name}'s Profile page</h2>
            <p>Email:{user?.email}</p>
            <p>Bio:{user?.bio}</p>
        </div>
    )

}