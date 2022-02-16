import P2020 from "./Images"
import SimpleReactLightbox,{SRLWrapper} from "simple-react-lightbox";
const Gallery = () =>{
  return (
    <SRLWrapper >
    <div id="gallery-container">
      { P2020.map(({id, src, title, description}) =>
        <img key={id} src={src} alt={description} className="gallery_img"/>

      )}
      </div>
    </SRLWrapper>

  )
}
export default Gallery;
