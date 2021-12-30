import CardDetail from "./CardDetail"
import cardData from "./data"

const Card = () => {
  const heroDetail = cardData.map(item => {
    return (
        <CardDetail 
          key={item.id}
          {...item}
        />  
    )
  })

  return (
    <div className="overflow-x-scroll mx-96 -px-20 pb-10 flex">
      {heroDetail}
    </div>
  )
}

export default Card