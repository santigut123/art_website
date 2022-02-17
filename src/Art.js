import Gallery from "./Gallery"
import{useState} from 'react'
const categories = ["Finished Paintings","Failed Paintings"]
// this function deals with the difference in label and year
const convertLabelToYear = (label) => {
  if (label==="2020s") return "2020";
  return label;
}
const Art =() =>{
  const defaultYear=artYears[artYears.length-1];
  const [category,setCategory] = useState(defaultYear)
  // This function just makes the buttons for each year in the artYears array, and highlights the curYear
  const makeYearButtons = (selected) => {

    let buttons = categories.map((item,index)=>{
      let className = "categoryButton";
      if(item===selected){
        className+= " selected";
      }
      return <button key={item} className={className} onClick ={()=>changeYear(item)}>{item}</button>;
    })
    return buttons;
  }

  const changeYear = (year) =>{
    setYear(year);
  }

  return(
    <div className="page">
    <div className= "yearButtons">
      {makeYearButtons(year)}
    </div>
      <Gallery curYear={convertLabelToYear(year)}/>
    </div>
  )
}

export default Art;
