const CardImage = ({img}) => {
  return (
    <div className="inline">
      <div className="absolute bg-white border-2 rounded-sm font-Poppins font-thin my-2 mx-2 text-sm px-1">SOLD OUT</div>
      <img className="w-1/4 h-min rounded-2xl" src={require(`../../assets/${img}`)} alt="Hero" />
    </div>
  )
}

export default CardImage
