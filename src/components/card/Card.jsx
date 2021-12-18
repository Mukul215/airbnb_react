import CardDetail from "./CardDetail"
import CardImage from "./CardImage"
import cardData from "./data"

const Card = () => {
  console.log(cardData[0].coverImg)


  const heroImage = cardData.map((item, index) => {
    return (
        <CardImage img={item.coverImg} />
    )
  })

  return (
    <div className="container max-w-screen-lg mx-auto pb-10">
      {/* {heroImage}       */}
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