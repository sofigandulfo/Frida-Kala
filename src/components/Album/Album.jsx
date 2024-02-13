// import Image from "../Image/Image";
// import { useEffect, useState } from "react";
// import appFirebase from "../../credentials";
// import './Album.css'

// import {
//   getFirestore,
//   collection,
//   getDocs,

// } from "firebase/firestore";

// const db = getFirestore(appFirebase);

// const Album = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const getPhotos = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "imagesFrida"));
//         const docs = [];
//         querySnapshot.forEach((doc) => {
//           docs.push({ ...doc.data(), id: doc.id });
//         });
//         setPhotos(docs);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getPhotos();
//   }, [photos]);

//   return (
//     <div className="bento-container">
//       {photos.map((photo, i) => (
//         <div key={photo.id} className={`card div${i + 1}`}>
//         <Image src={photo.imagen} className="image"></Image>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Album;

// const [allPhotos, setAllPhotos] = useState([]);
// const [displayedPhotos, setDisplayedPhotos] = useState([]);
// const [remainingPhotos, setRemainingPhotos] = useState([]);

// useEffect(() => {
//   const getPhotos = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "imagesFrida"));
//       const docs = [];
//       querySnapshot.forEach((doc) => {
//         docs.push({ ...doc.data(), id: doc.id });
//       });
//       setAllPhotos(docs);
//       setRemainingPhotos(docs);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getPhotos();
// }, []);

// const displayNextPhotos = () => {
//   if (remainingPhotos.length === 0) return;

//   const remainingToShow = Math.min(remainingPhotos.length, 10 - displayedPhotos.length);
//   const randomIndexes = [];

//   for (let i = 0; i < remainingToShow; i++) {
//     const randomIndex = Math.floor(Math.random() * remainingPhotos.length);
//     const randomPhoto = remainingPhotos[randomIndex];
//     randomIndexes.push(randomIndex);
//     setDisplayedPhotos([...displayedPhotos, randomPhoto]);
//   }

//   const newRemainingPhotos = remainingPhotos.filter((_, index) => !randomIndexes.includes(index));
//   setRemainingPhotos(newRemainingPhotos);
// };

import Image from "../Image/Image";
import { useEffect, useState } from "react";
import appFirebase from "../../credentials";
import "./Album.css";

import { getFirestore, collection, getDocs } from "firebase/firestore";



const db = getFirestore(appFirebase);
const Album = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [shownPhotos, setShownPhotos] = useState([]);
  const [remainingPhotos, setRemainingPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "imagesFrida"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setAllPhotos(docs);
        console.log(allPhotos)
        shuffleArray(docs); // Mezclar las imágenes
        setShownPhotos(docs.slice(0, 10)); // Mostrar las primeras 10 imágenes
        setRemainingPhotos(docs.slice(10)); // Almacenar el resto para el botón "Ver más"
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
    if(remainingPhotos.length > 0 ){
      const nextImages = remainingPhotos.slice(0, 10); // Tomar las próximas 10 imágenes para mostrar
      setShownPhotos((prevPhotos) => [...prevPhotos, ...nextImages]); // Agregarlas a las imágenes mostradas
      setRemainingPhotos(remainingPhotos.slice(10)); // Eliminar las imágenes mostradas de las restantes
    }
  };

  return (
    <>
      <div className="grid-container">
        {shownPhotos.map((photo) => (
            <Image key={photo.id} src={photo.imagen} className="grid-item"></Image>
        ))}
      </div>
        <button onClick={showMoreImages}>Ver más</button>

    </>
  );
};

export default Album;
