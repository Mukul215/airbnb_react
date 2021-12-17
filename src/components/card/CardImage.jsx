import CardPicture from '../../assets/Katie.png'

const CardImage = () => {
  return (
    <div className="inline">
      <div className="absolute bg-white border-2 rounded-sm font-Poppins font-thin my-2 mx-2 text-sm px-1">SOLD OUT</div>
      <img src={CardPicture} alt="" />
    </div>
  )
}

export default CardImage
