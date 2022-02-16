import Gallery from "./Gallery"
import{useState} from 'react'
const artYears = ["2020 and before","2021","2022"]
const Art =() =>{
  const [year,setYear] = useState()
  return(
    <div className="page">
    <Gallery/>
    </div>
  )
}
export default Art;
