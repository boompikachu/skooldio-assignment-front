import Badge from "./../assets/badge.svg"
const Score = () => {
  return (
    <div className="flex justify-between">
      <img src={Badge} alt="badge" />
      <div className="flex flex-col">
        <p>คะแนนของคุณคือ</p>
        <p className="font-light text-5xl">23,453</p>
      </div>
    </div>
  )
}

export default Score
