import Header from "./Header.js"
import OpenRound from "./OpenRound.js"
import AdmissionRound from "./AdmissionRound.js"
import Score from "./Score.js"
import ScoreDetails from "./ScoreDetails.js"
import Share from "./../assets/share.svg"

const Card = (props) => {
    const {data} = props
  return (
    <div className="flex flex-col font-body divide-y p-5 text-body w-96 shadow border rounded">
      <Header name={data.name} faculty={data.faculty.name} university={data.faculty.university.name}/>
      <div>
        <OpenRound />
        <AdmissionRound />
        <Score />
        <ScoreDetails />
      </div>
      <div className="text-mint font-light py-4">ดูสัดส่วนคะแนน</div>
      <div className="flex justify-between items-center pt-4">
        <div>
          <span className="font-light text-xs">10 </span>
          <span className="font-light italic text-xs">คนที่สนใจ</span>
        </div>
        <img src={Share} alt="share button" />
      </div>
    </div>
  )
}

export default Card
