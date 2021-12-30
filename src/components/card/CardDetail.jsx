import Star from '../../assets/star.png'

const CardDetail = (props) => {

  let badgeText = ''

  if (props.OpenSpots === 0) {
    badgeText = "Sold Out"
  } else if (props.country === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <section className='overflow-x-scroll'>
    <div className="inline overflow-x-scroll">
      <div className="inline overflow-x-scroll">
        {/* This is conditional rendering of SOLD OUT if open spots in data.json === 0 else do not render anything */}
        {badgeText && <div className="absolute bg-white border-2 rounded-sm font-Poppins font-thin my-2 mx-2 text-sm px-1 overflow-x-auto">{badgeText}</div>}
        <img className="w-48 h-96 rounded-2xl" src={require(`../../assets/${props.coverImg}`)} alt="Hero" />
      </div>
      <div className="pt-1 inline-flex text-sm">
        <img className="w-4 h-4 my-1" src={Star} alt="ratings" />
        <p className="font-Poppins my-0.5 font-thin">&nbsp;&nbsp;{props.stats.rating} ({props.stats.reviewCount}) • &nbsp;{props.country}</p>
      </div>
      <div className="font-Poppins text-sm font-thin">
        <p>{props.title}</p>
        <div className="inline-flex">
        <p className="font-medium">From ${props.price}</p>
        <p>&nbsp;/ person</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default CardDetail