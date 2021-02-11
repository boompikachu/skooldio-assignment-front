import Edit from "./../assets/edit.svg"

const EditScoreButton = () => {
  return (
    <div className="flex items-center text-xs border border-grapefruit rounded-2xl p-2 ">
      <p className="px-3">แก้ไขคะแนน</p>
      <img src={Edit} alt="edit" />
    </div>
  )
}

export default EditScoreButton
