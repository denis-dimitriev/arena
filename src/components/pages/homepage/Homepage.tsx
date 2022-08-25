import "./Homepage.scss";

import { Carousel } from "../../organisms/carousel/Carousel";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__container">
        <Carousel />
        <h1>homepage</h1>
      </div>
    </div>
  );
};

export default Homepage;
