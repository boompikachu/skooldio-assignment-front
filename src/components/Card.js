import Header from "./Header.js"
import OpenRound from "./OpenRound.js"
import AdmissionRound from "./AdmissionRound.js"
import Score from "./Score.js"
import ScoreDetails from "./ScoreDetails.js"

const Card = () => {
  return (
    <div className="flex flex-col font-body divide-y w-">
      <Header />
      <div>
        <OpenRound />
        <AdmissionRound />
        <Score />
        <ScoreDetails />
      </div>
    </div>
  )
}

export default Card
