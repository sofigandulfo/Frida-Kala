import './Input.css';
import appFirebase from "../../credentials";
import { useRef } from 'react'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Add from "../../assets/Add";

const db = getFirestore(appFirebase);
const storage = getStorage(appFirebase);

function Input() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const guardarInfo = async (e) => {
    e.preventDefault();
    const archivoImg = e.target.file.files[0];

    const refArchivo = ref(storage, `documentos/${archivoImg.name}`);
    await uploadBytes(refArchivo, archivoImg);
    const urlImgDesc = await getDownloadURL(refArchivo);

    const newImage = {
      imagen: urlImgDesc,
    };

    try {
      await addDoc(collection(db, "imagesFrida"), {
        ...newImage,
      });
    } catch (error) {
      console.log(error);
    }

    e.target.file.value = "";
  };

  return (
    <div className="input-image" onClick={handleClick}>
        <Add />
      <input
        type="file"
        id="file"
        ref={fileInputRef}
        style={{display: 'none'}}
        onChange={guardarInfo}
        required
      />
    </div>
  );
}

export default Input;
