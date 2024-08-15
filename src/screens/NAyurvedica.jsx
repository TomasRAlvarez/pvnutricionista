import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import "../styles/mainPageInfo.css";

const NAyurvedica = () => {
	const turnoInfo = [
		{
			title: "Opcion 1",
			list: ["1er Consulta", "Plan de Alimentacion"],
		},
		{
			title: "Opcion 2",
			list: ["Seguimiento", "Control"],
		},
	];

	return (
		<div>
			<Header isScrolled={true} />
			<main className='mainInfoContainer'>
				<div className='infoContainer d-flex'>
					<div className='mainInfoText'>
						<h2>¿Que es la Nutricion Ayurvédica?</h2>
						<p>
							Ayurveda, que significa “Ciencia o Sabiduría de la Vida”, se origina en la medicina
							ayurvédica de la India. Este sistema holístico tiene como objetivo mantener o mejorar
							la salud a través de un estilo de vida saludable. Su enfoque se centra en la
							interconexión entre mente y cuerpo, adaptando la alimentación según las necesidades
							individuales y la constitución única de cada persona.
						</p>
					</div>
					<div className='mainInfoImg'>
						<img src='https://via.placeholder.com/300x300' alt='' />
					</div>
				</div>

				<div className='infoContainer d-flex'>
					<div className='mainInfoImg'>
						<img src='https://via.placeholder.com/300x300' alt='' />
					</div>
					<div className='mainInfoText'>
						<p>
							Según la medicina ayurvédica los doshas son los tres principios energéticos que rigen
							nuestro cuerpo y mente. Cada dosha (Vata, Pitta y Kapha) tiene preferencias y gustos
							alimenticios diferentes que ayudan a mantener el equilibrio. Es importante conocer
							nuestro tipo de dosha predominante para poder ajustar nuestra alimentación y mejorar
							nuestro estilo de vida. Algunos de los beneficios de esta alimentación son que
							promueve una buena digestión y mejora nuestra microbiota intestinal, proporciona una
							energía equilibrada, sostenida y balanceada, logrando así un bienestar integral.
						</p>
					</div>
				</div>
				<div className='turnosCardContainer'>
					{turnoInfo.map((turno, index) => (
						<AppointmentCard
							key={index}
							title={turno.title}
							items={turno.list}
							buttonText='Sacar Turno'
						/>
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default NAyurvedica;
