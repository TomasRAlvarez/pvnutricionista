import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ title, items, buttonText }) => {
	return (
		<div className='card'>
			<h2>{title}</h2>
			<ul className='item-list'>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
			<button className='card-button'>{buttonText}</button>
		</div>
	);
};

export default AppointmentCard;
