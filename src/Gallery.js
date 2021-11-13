import{useState} from 'react'
import P2020 from "./Images"
import SimpleReactLightbox,{SRLWrapper} from "simple-react-lightbox";
const Gallery = () =>{
  const [currentLarge,setImage] = useState()
  return (
    <SRLWrapper >
    <div id="gallery-container">
      { P2020.map(({id, src, title, description}) =>
        <img key={id} src={src} title={title} alt={description} className="gallery_img"/>

      )}
      </div>
    </SRLWrapper>

  )
}
export default Gallery;
