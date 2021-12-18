import CardDetail from "./CardDetail"
import CardImage from "./CardImage"

const Card = () => {
  return (
    <div className="container max-w-screen-lg mx-auto pb-10">
      <CardImage 
        img="Katie.png"
      /> 
      <CardDetail               
        rating="5.0"
        reviewCount={100}
        country="United States"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default Card
