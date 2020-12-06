import { node } from 'prop-types'
import Slider from "react-slick";

function HorizontalList({ children }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}

HorizontalList.propTypes = {
  children: node.isRequired
}

export default HorizontalList