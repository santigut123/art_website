import Gallery from "./Gallery"
import{useState} from 'react'
const artYears = ["2020 and before","2021","2022"]
const Art =() =>{

  let makeYearButtons = (curYear) => {
    let buttons = artYears.map((item,index)=>{
      let className = "yearButton";
      if(item===curYear){
        className+= " selected";
      }
      return <button key={item} className={className} onClick ={()=>changeYear(item)}>{item}</button>
    })
    return buttons;
  }

  const defaultYear=artYears[artYears.length-1];

  const [year,setYear] = useState(defaultYear)

  let changeYear = (year) =>{
    setYear(year);
  }

  return(
    <div className="page">
    <div className= "yearButtons">
      {makeYearButtons(year)}
    </div>
      <Gallery year={year}/>
    </div>
  )
}

export default Art;
