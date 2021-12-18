import Star from '../../assets/star.png'

const CardDetail = ({img, rating, reviewCount, country, title, price}) => {
  return (
    <div>
      <div className="inline">
        <div className="absolute bg-white border-2 rounded-sm font-Poppins font-thin my-2 mx-2 text-sm px-1">SOLD OUT</div>
        <img className="w-1/4 h-min rounded-2xl" src={require(`../../assets/${img}`)} alt="Hero" />
    </div>
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