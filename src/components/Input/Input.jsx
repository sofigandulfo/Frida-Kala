
import appFirebase from "../../credentials";

import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

function Input() {

    const guardarInfo = async (e) => {
        e.preventDefault();
        const archivoImg = e.target.file.files[0];

        const refArchivo = ref(storage, `documentos/${archivoImg.name}`);
        await uploadBytes(refArchivo, archivoImg)
        const urlImgDesc = await getDownloadURL(refArchivo);

        const newImage = {
            imagen: urlImgDesc
        }

        try {
            await addDoc(collection(db, 'imagesFrida'), {
                ...newImage
            })
        } catch(error){
            console.log(error);
        }

        e.target.file.value = '';
    }

    return (
        <form onSubmit={guardarInfo}>
            <input type="file" id="file" placeholder="Agregar imagen de Frida" className="input-image"  required/>

            <button className="btn button-primary">Subir</button>
        </form>
    )
}

export default Input
