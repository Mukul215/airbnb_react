import CardDetail from "./CardDetail"
import cardData from "./data"

const Card = () => {
  const heroDetail = cardData.map(item => {
    return (
        <CardDetail 
          img={item.coverImg}
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
      {/* {heroImage}       */}
      {heroDetail}
    </div>
  )
}

export default Card