import Star from '../../assets/star.png'

const CardDetail = ({rating, reviewCount, country, title, price}) => {
  return (
    <div>
      <div className="pt-1 inline-flex text-sm">
        <img className="w-4 h-4 my-1" src={Star} alt="ratings" />
        <p className="font-Poppins my-0.5 font-thin">&nbsp;&nbsp;{rating} ({reviewCount}) • &nbsp;{country}</p>
      </div>
      <div className="font-Poppins text-sm font-thin">
        <p>{title}</p>
        <div className="inline-flex">
        <p className="font-medium">From ${price}</p>
        <p>&nbsp;/ person</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail