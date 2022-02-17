import {P2020,P2021} from "./Images"
import SimpleReactLightbox,{SRLWrapper} from "simple-react-lightbox";
const Gallery = ({curYear}) =>{
  const getPhotosByYear = (year) => {
  if (year==="2020") return P2020;
  if (year==="2021") return P2021;
  }
  let curGal = getPhotosByYear(curYear);

  return (
    <SRLWrapper >
    <div id="gallery-container">
      {curGal?.map(({id, src, title, description}) =>
        <img key={id} src={src} alt={description} className="gallery_img"/>

      )}
      </div>
    </SRLWrapper>

  )
}
export default Gallery;
