import Heart from "./../assets/heart.svg"
import Gear from "./../assets/gear.svg"

const Header = () => {
  return (
    <div className="flex items-start">
      <img src={Gear} alt="gear" className="pb-5 pr-5"/>
      <div className="mr-auto">
        <p className="text-2xl font-semibold text-grapefruit">คณะวิศวกรรมศาสตร์</p>
        <p className="text-xl font-medium text-warmgray">สาขาวิศวกรรมทั่วไป</p>
        <p className="text-xl font-light text-warmgray mt-6">จุฬาลงกรณ์มหาวิทยาลัย</p>
      </div>
      <img src={Heart} alt="heart like" />
    </div>
  )
}

export default Header
