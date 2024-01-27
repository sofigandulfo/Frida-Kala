import "./MainHome.css";
import Image from "../../Image/Image";
import Button from "../../Button/Button";

function MainHome() {
  return (
    <main>
        <h1 className="title">FRIDA KALA</h1>
        <h2 className="subtitle">Hi! It&apos;s me</h2>
        <div className="bento-container">
          <Image className="image"></Image>
        </div>
      <Button type="button">cargar más</Button>
    </main>
  );
}

export default MainHome;
