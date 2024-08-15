import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const MainCard = ({ img, title, text, navlink }) => {
	let alt = title + " Logo";

	return (
		<div className='card mainCard'>
			<div className='card-body mainCardBody'>
				<img
					src={img}
					alt={alt}
					className='imgMainCard rounded-circle mx-auto d-block'
					style={{ width: "150px", height: "150px" }}
				/>
				<h6 className='card-title mt-5'>{title}</h6>
				<p className='card-text mt-3'>{text}</p>
				<Link to={navlink} className='btn btn-primary mt-3'>
					Ver mas
				</Link>
			</div>
		</div>
	);
};

export default MainCard;
