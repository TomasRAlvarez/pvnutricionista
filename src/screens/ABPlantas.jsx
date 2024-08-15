import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AppointmentCard from "../components/AppointmentCard/AppointmentCard";
import "../styles/mainPageInfo.css";

const ABPlantas = () => {
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
						<h2>¿Por que Alimentacion a Base de Plantas?</h2>
						<p>
							La alimentación basada en plantas promueve una relación más beneficiosa para tu salud
							y respetuosa con el medio ambiente. Al adoptar este enfoque, generamos una elección
							más consciente con los alimentos, idealmente optando por alimentos en su forma natural
							o mínimamente procesados,lo que preserva sus nutrientes y evita aditivos innecesarios.
							Te invito a conocer los beneficios de esta alimentación.
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
							Al ser alimentos de origen vegetal, brindan antioxidantes, vitaminas y minerales
							esenciales para el funcionamiento óptimo del cuerpo. Se asocia con un menor riesgo de
							enfermedades crónicas como enfermedades cardíacas, diabetes y ciertos tipos de cáncer,
							y contribuimos a la sostenibilidad del planeta reduciendo el impacto ambiental, por el
							modo de producción de estos alimentos.
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

export default ABPlantas;
