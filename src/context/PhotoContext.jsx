
import {createContext, useState} from 'react'

export const PhotoContext = createContext()

export const PhotoProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);

return (
  <PhotoContext.Provider value={{ allPhotos, setAllPhotos }}>
      {children}
  </PhotoContext.Provider>
)
}


