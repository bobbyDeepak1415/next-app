type CardProps={
   title:string,
   description:string
}

const Card = ({title,description}:CardProps) => {
  return (
    <div>
      <h1>Card component</h1>
      <p>simpe card component</p>
    </div>
  )
}

export default Card
