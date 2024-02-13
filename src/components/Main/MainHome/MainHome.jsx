
import "./MainHome.css";
import Input from "../../Input/Input";
import Album from "../../Album/Album";

function MainHome() {
  return (
    <main>
      <h1 className="title">FRIDA KALA</h1>
      <h2 className="subtitle">Hi! It&apos;s me</h2>
      <Input></Input>
        <Album  />
    </main>
  );
}

export default MainHome;
