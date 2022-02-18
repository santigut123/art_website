import {Paintings} from "./Images"
import SimpleReactLightbox,{SRLWrapper} from "simple-react-lightbox";
const Gallery = ({curCat}) =>{
  const getPhotosByCategory = (cat) => {
    if(cat==="Finished Paintings") return Paintings;

  }
  let curGal = getPhotosByCategory(curCat);

  return (
    <SRLWrapper >
    <div id="gallery-container">
      {curGal?.map(({id, src,thumbnail, title, description}) =>
        <a href={src} className="gallery_img">
        <img key={id} src={thumbnail} alt={description} className="gallery_img"/>
        </a>
      )}
      </div>
    </SRLWrapper>

  )
}
export default Gallery;
