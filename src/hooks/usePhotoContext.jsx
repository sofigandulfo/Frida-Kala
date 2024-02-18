import { useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext';


export const usePhotoContext = () => useContext(PhotoContext);