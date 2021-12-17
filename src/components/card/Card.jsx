import CardDetail from "./CardDetail"
import CardImage from "./CardImage"

const Card = () => {
  return (
    <div className="container max-w-screen-lg mx-auto pb-10">
      <CardImage /> 
      <CardDetail />
    </div>
  )
}

export default Card
