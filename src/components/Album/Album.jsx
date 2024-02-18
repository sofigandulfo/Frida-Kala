import Image from "../Image/Image";
import { useEffect, useState } from "react";
import { usePhotoContext } from "../../hooks/usePhotoContext";
import appFirebase from "../../credentials";
import "./Album.css";
import InfiniteScroll from "react-infinite-scroll-component";
import ModalPopup from "react-modal-popup";
// import Modal from 'react-modal';
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import { getFirestore, collection, getDocs } from "firebase/firestore";

// Modal.setAppElement('#root');


const db = getFirestore(appFirebase);
const Album = () => {
  const { setAllPhotos } = usePhotoContext();
  const [showPhotos, setShowPhotos] = useState([]);
  const [remainingPhotos, setRemainingPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectImagen, setSelectImagen] = useState(null);

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

  // Función para mezclar un array (algoritmo de Fisher-Yates)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const showMoreImages = () => {
    if (remainingPhotos.length > 0) {
      const nextImages = remainingPhotos.slice(0, 10); // Tomar las próximas 10 imágenes para mostrar
      setShowPhotos((prevPhotos) => [...prevPhotos, ...nextImages]); // Agregarlas a las imágenes mostradas
      setRemainingPhotos(remainingPhotos.slice(10)); // Eliminar las imágenes mostradas de las restantes
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
      <InfiniteScroll
        dataLength={showPhotos.length}
        hasMore={remainingPhotos.length > 0}
        next={showMoreImages}
        loader={<h4>loading...</h4>}
        endMessage={<p className="endMessage">No hay más imágenes</p>}
      >
        <Box sx={{ maxWidth: 960, minHeight: 393 }} className="grid-container">
          <Masonry
            columns={{ xs: 2, sm: 2, md: 3, xl: 4 }}
            spacing={2}
            id="masonry"
          >
            {showPhotos.map((photo) => (
              <Image
                key={photo.id}
                src={photo.imagen}
                className="grid-item"
                onClick={() => handleShowModal(photo.imagen)}
              ></Image>
            ))}
          </Masonry>
        </Box>
      </InfiniteScroll>
      <ModalPopup isOpen={isOpen} onCloseModal={handleCloseModal}>
        {selectImagen && <img src={selectImagen} className="image-modal" />}
      </ModalPopup>
    </>
  );
};

export default Album;
