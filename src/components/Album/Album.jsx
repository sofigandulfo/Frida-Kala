import Image from "../Image/Image";
import { useEffect, useState } from "react";
import { usePhotoContext } from "../../hooks/usePhotoContext";
import appFirebase from "../../credentials";
import "./Album.css";
import ModalPopup from "react-modal-popup";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const db = getFirestore(appFirebase);
const Album = () => {
  const { setAllPhotos } = usePhotoContext();
  const [showPhotos, setShowPhotos] = useState([]);
  const [remainingPhotos, setRemainingPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectImagen, setSelectImagen] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "imagesFrida"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setAllPhotos(docs);
        shuffleArray(docs);
        const initialPhotos = docs.slice(0, 10);
        setShowPhotos(initialPhotos);
        setRemainingPhotos(docs.slice(10));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, []);


  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const showMoreImages = () => {
    if (remainingPhotos.length > 0) {
      setLoading(true); 
      setTimeout(() => {
        const nextImages = remainingPhotos.slice(0, 10);
        setShowPhotos((prevPhotos) => [...prevPhotos, ...nextImages]);
        setRemainingPhotos(remainingPhotos.slice(10));
        setLoading(false); 
      }, 500); 
    }
  };

  const handleShowModal = (imagen) => {
    setIsOpen(true);
    setSelectImagen(imagen);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectImagen(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Box sx={{ maxWidth: 960, minHeight: 393 }} className="grid-container">
        <Masonry
          columns={{ xs: 2, sm: 2, md: 3, xl: 4 }}
          spacing={2}
          id="masonry"
        >
          {showPhotos.map((photo) => (
            <div key={photo.id} className="image-container">
              <Image
                src={photo.imagen}
                className="grid-item"
                onClick={() => handleShowModal(photo.imagen)}
                onLoad={(e) => e.target.classList.add('loaded')} 
                alt="gallery"
              />
              <div className="spinner"></div>
            </div>
          ))}
        </Masonry>
      </Box>
      {remainingPhotos.length > 0 && (
        <button
          onClick={showMoreImages}
          className="load-more-button"
          disabled={loading} 
        >
          {loading ? 'Cargando...' : 'Cargar más'}
        </button>
      )}
      <ModalPopup isOpen={isOpen} onCloseModal={handleCloseModal}>
        {selectImagen && <img src={selectImagen} className="image-modal" />}
      </ModalPopup>
    </>
  );
};

export default Album;