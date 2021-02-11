import Card from "./components/Card.js"
import { useState, useEffect } from "react"

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  console.log(data)
  return (
    <div>
      {data?.map((info) => (
        <Card data={info} />
      ))}
    </div>
  )
}

export default App
