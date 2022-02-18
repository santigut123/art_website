import Gallery from "./Gallery"
import{useState} from 'react'
const categories = ["Finished Paintings"]
const Art =() =>{
  const defaultCategory="Finished Paintings";
  const [category,setCategory] = useState(defaultCategory);
  // This function just makes the buttons for each category
  const makeCatButtons = (selected) => {

    let buttons = categories.map((item,index)=>{
      let className = "categoryButton";
      if(item===selected){
        className+= " selected";
      }
      return <button key={item} className={className} onClick ={()=>setCategory(item)}>{item}</button>;
    })
    return buttons;
  }
  return(
    <div className="page">
    <div className= "yearButtons">
      {makeCatButtons(category)}
    </div>
      <Gallery curCat={category}/>
    </div>
  )
}

export default Art;
