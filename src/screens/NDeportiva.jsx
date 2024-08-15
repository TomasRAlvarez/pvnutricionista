import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import "../styles/mainPageInfo.css";

const NDeportiva = () => {
	const turnoInfo = [
		{
			title: "Opcion 1",
			list: ["1er Consulta", "Plan de Alimentacion"],
		},
		{
			title: "Opcion 2",
			list: ["Seguimiento", "Control"],
		},
		{
			title: "Opcion 3",
			list: ["Mediciones Antropométricas"],
		},
	];

	return (
		<div>
			<Header isScrolled={true} />
			<main className='mainInfoContainer'>
				<div className='infoContainer d-flex'>
					<div className='mainInfoText'>
						<h2>Objetivo</h2>
						<p>
							Mi objetivo es optimizar tu rendimiento físico a través de la alimentación de manera
							estratégica. Considerando la cantidad adecuada de energía, nutrientes para la salud y
							reparación de tejidos, y los requerimientos específicos para un rendimiento deportivo
							óptimo y una buena recuperación ya que una dieta equilibrada fortalece los músculos y
							articulaciones, disminuyendo el riesgo de lesiones.
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
							Adaptar el plan según tu actividad, preferencias y las fases de entrenamiento (pre,
							durante y post). Además, evaluar si es necesario incorporar algún suplemento para
							alcanzar tus objetivos. También complementar esto con análisis antropométricos y
							seguimiento para medir tus avances.
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

export default NDeportiva;
