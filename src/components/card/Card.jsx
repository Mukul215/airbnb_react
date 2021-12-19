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
    <div className="overflow-x-scroll max-w-screen-lg mx-96 -px-20 pb-10 flex">
      {heroDetail}
    </div>
  )
}

export default Card