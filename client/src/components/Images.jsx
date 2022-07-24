import { Carousel } from "react-bootstrap";
//import forest from "../img/forest.jpeg";
// import Credentials from "./ Credentials";
import mentor1 from "../img/mentor1.jpg";
import mentor2 from "../img/mentor2.jpg";
import mentor3 from "../img/mentor3.jpg";

export default function Images() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={mentor1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mentor2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mentor3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
