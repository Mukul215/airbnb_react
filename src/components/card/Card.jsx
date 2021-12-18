import CardDetail from "./CardDetail"
import CardImage from "./CardImage"
import cardData from "./data"

const Card = () => {
  const heroImage = cardData.map((item, index) => {
    return (
        <CardImage img={item.coverImg} />
    )
  })

  const heroDetail = cardData.map((item, index) => {
    return (
        <CardDetail 
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}
        />  
    )
  })

  return (
    <div className="container max-w-screen-lg mx-auto pb-10">
      {heroImage}      
      {heroDetail}
    </div>
  )
}

export default Card