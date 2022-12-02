import "./home.css";

export default function Home() {
  let image = require("../pictures/homepageImage.jpg");

  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1> Home -- About</h1>
        </div>
      </div>
      <img id="homeImage" src={image} alt="" />
      <h4>Spiel Goes Here</h4>
    </div>
  );
}
