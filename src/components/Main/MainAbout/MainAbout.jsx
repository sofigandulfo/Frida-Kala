import "../../Main/Main.css";
import "./MainAbout.css";
import Image from "../../Image/Image";
import { useEffect, useState } from "react";
import { usePhotoContext } from "../../../hooks/usePhotoContext";

function MainAbout() {
  const { allPhotos } = usePhotoContext();
  const [randomImage, setRandomImage] = useState(null);
  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/fridakala-58cf8.appspot.com/o/documentos%2FBEA52197-06C0-4EC7-9060-AD5075907479.jpg?alt=media&token=008ff3bb-ec0a-4463-aa8a-c12d65e3af6d";

  useEffect(() => {
    if (allPhotos.length > 0) {
      const randomIndex = Math.floor(Math.random() * allPhotos.length);
      const randomImageUrl = allPhotos[randomIndex].imagen;

      setRandomImage(randomImageUrl);
    }
  }, [allPhotos]);

  return (
    <main className="about-main">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">Hello! I am Frida Kala</h1>
          <p className="about-paragraph">
            Soy una perrita muy <strong>adorable</strong>,{" "}
            <strong>traviesa</strong>, <strong>tierna</strong>,{" "}
            <strong>juguetona</strong> y <strong>linda</strong>. Pero que eso no
            te haga confiar, porque también soy muy <strong>rebelde</strong> y
            no hago caso.
            <br />
            <br />
            Me encanta estar con mi familia, pero más que nada con mi{" "}
            <strong>ama suprema</strong>. Cada vez que se va me pongo a llorar y
            molesto al resto, pero cuando vuelve me pongo muy contenta.
          </p>
        </div>
        {randomImage ? (
          <Image src={randomImage} className="image about-image" />
        ) : (
          <Image src={defaultImage} className="image about-image" />
        )}
      </div>
    </main>
  );
}

export default MainAbout;
