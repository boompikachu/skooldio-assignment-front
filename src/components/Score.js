import Badge from "./../assets/badge.svg"
const Score = () => {
  return (
    <div className="flex">
      <img src={Badge} alt="badge" />
      <div className="flex flex-col">
        <p>คะแนนของคุณคือ</p>
        <p>23,453</p>
      </div>
    </div>
  )
}

export default Score
