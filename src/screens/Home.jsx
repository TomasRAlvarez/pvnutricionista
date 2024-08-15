import { useEffect, useState } from "react";
import Carrusel from "../components/Carousel/Carrusel";
import Header from "../components/Header/Header";
import "../styles/home.css";
import logo from "../assets/images/logo-2.png";
import Footer from "../components/Footer/Footer";
import MainCard from "../components/Card/MainCard";
import nutDepLogo from "../assets/images/nutri-deportiva-logo.png";
import nutAyuLogo from "../assets/images/nutri-ayurvedica-logo.png";
import aliPlaLogo from "../assets/images/alimentacion-plantas-logo.png";

const Home = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToMain = () => {
		document.getElementById("mainHome").scrollIntoView({ behavior: "smooth" });
	};

	const dataCards = [
		{
			id: "NDeportivaCard",
			title: "Nuticion Deportiva",
			img: nutDepLogo,
			text: "Optimiza tu rendimiento físico con una dieta estratégica que fortalece músculos y articulaciones. Conoce cómo adaptar tu alimentación para mejorar tu entrenamiento y recuperación. ¡Descubre más!",
			navlink: "/nutricion-deportiva",
		},
		{
			id: "NAyurvedicaCard",
			title: "Nutricion Ayurvédica",
			img: nutAyuLogo,
			text: "Equilibra tu mente y cuerpo con la nutrición ayurvédica. Aprende a adaptar tu dieta según tu dosha para una digestión óptima y energía equilibrada. ¡Conoce más sobre esta práctica milenaria!",
			navlink: "/nutricion-ayurvedica",
		},
		{
			id: "ABPlantasCard",
			title: "Alimentacion a base de Plantas",
			img: aliPlaLogo,
			text: "Mejora tu salud y cuida el medio ambiente con una dieta basada en plantas. Descubre cómo los alimentos naturales aportan nutrientes esenciales y reducen el riesgo de enfermedades. ¡Explora más!",
			navlink: "/alimentacion-base-plantas",
		},
	];

	return (
		<div>
			<Header isScrolled={isScrolled} />
			<div className='carousel-container position-relative'>
				<Carrusel />
				<div className='titleContainer position-absolute text-center'>
					<h2 className='title text-white'>Alimentación consciente</h2>
					<h5 className='subtitle text-white'>desde un enfoque integral para nuestro cuerpo</h5>
					<button type='button' className='btn btn-primary mainBtn' onClick={scrollToMain}>
						Conoce mas
					</button>
				</div>
			</div>
			<main id='mainHome' className='mainContainer d-flex flex-column'>
				<div className='mainInfo d-flex'>
					<div className='mainInfoText'>
						<h2>Mi proposito</h2>
						<p>
							Mi propósito es acompañarte hacia una alimentación saludable integrando la dimensión
							física y emocional, reconociendo la relación entre el cuerpo y salud, para lograr un
							bienestar general. Se trata de elegir alimentos nutritivos que nos proporcionen
							energía y vitalidad, sin descuidar el placer de comer y respetando tus gustos
							personales. Juntos crearemos un plan que se adapte a tus necesidades y preferencias
							individuales.
						</p>
					</div>
					<div className='mainInfoImg'>
						<img src={logo} alt='Logo Paloma Varona Nutricionista' />
					</div>
				</div>

				<div className='mainCards d-flex'>
					{dataCards.map((card) => (
						<MainCard
							key={card.id}
							img={card.img}
							title={card.title}
							text={card.text}
							navlink={card.navlink}
						/>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
