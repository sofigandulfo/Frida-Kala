import "../../Main/Main.css";
import "./MainAbout.css";
import Image from "../../Image/Image";

function MainAbout() {
  return (
    <main className="about-main">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">Hello! I am Frida Kala</h1>
          <p className="about-paragraph">
            Soy una perrita muy <strong>adorable</strong>, <strong>traviesa</strong>, <strong>tierna</strong>, <strong>juguetona</strong> y <strong>linda</strong>.
            Pero que eso no te haga confiar, porque también soy muy <strong>rebelde</strong> y no
            hago caso.
            <br />
            <br />
            Me encanta estar con mi familia, pero más que nada con mi  <strong>ama suprema</strong>. 
            Cada vez que se va me pongo a llorar y molesto al
            resto, pero cuando vuelve me pongo muy contenta.
          </p>
        </div>
        <Image className='image about-image'/>
      </div>
    </main>
  );
}

export default MainAbout;
