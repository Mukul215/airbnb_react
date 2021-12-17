import Star from '../../assets/star.png'

const CardDetail = () => {
  return (
    <div>
      <div className="pt-1 inline-flex text-sm">
        <img className="w-4 h-4 my-1" src={Star} alt="ratings" />
        <p className="font-Poppins my-0.5 font-thin">&nbsp;&nbsp;5.0 (6) • &nbsp;USA</p>
      </div>
      <div className="font-Poppins text-sm font-thin">
        <p>Life lessions with Katie Zaferes</p>
        <div className="inline-flex">
        <p className="font-medium">From $136</p>
        <p>&nbsp;/ person</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetail