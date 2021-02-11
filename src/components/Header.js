import Heart from "./../assets/heart.svg"
import Gear from "./../assets/gear.svg"

const Header = () => {
  return (
    <div className="flex">
      <img src={Gear} alt="gear" />
      <div>
        <p className="text-2xl font-semibold text-grapefruit">คณะวิศวกรรมศาสตร์</p>
        <p className="text-xl font-medium">สาขาวิศวกรรมทั่วไป</p>
        <p className="text-xl font-light">จุฬาลงกรณ์มหาวิทยาลัย</p>
      </div>
      <img src={Heart} alt="heart like" />
    </div>
  )
}

export default Header
