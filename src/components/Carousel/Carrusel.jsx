import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/images/carousel-1.jpg";
import carousel2 from "../../assets/images/carousel-2.jpg";
import "./carrusel.css";

function Carrusel() {
	return (
		<Carousel fade controls={false} indicators={false} pause={false}>
			<Carousel.Item interval={1000}>
				<img src={carousel1} alt='h-100' className='imgCarrusel d-block w-100' />
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img src={carousel2} alt='h-100' className='imgCarrusel d-block w-100' />
			</Carousel.Item>
			<Carousel.Item interval={1000}>
				<img src={carousel1} alt='h-100' className='imgCarrusel d-block w-100' />
			</Carousel.Item>
		</Carousel>
	);
}

export default Carrusel;
