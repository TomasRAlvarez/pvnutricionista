import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import logo from "../../assets/images/logo-2.png";
import instagramLogo from "../../assets/icons/instagram.svg";
import mailLogo from "../../assets/icons/mail.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='text-muted pt-5 pb-4'>
			<div className='container text-center text-md-left'>
				<div className='row'>
					<div className='col-md-4 col-lg-4 col-xl-4 mx-auto mt-3'>
						<img src={logo} alt='Logo' className='img-fluid mb-2' />
					</div>

					<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Ver mas</h6>
						<p>
							<NavLink to='/' className='text-reset'>
								Inicio
							</NavLink>
						</p>
						<p>
							<NavLink to='/nutricion-deportiva' className='text-reset'>
								Nutricion Deportiva
							</NavLink>
						</p>
						<p>
							<NavLink to='/nutricion-ayurvedica' className='text-reset'>
								Nutricion ayurvédica
							</NavLink>
						</p>
						<p>
							<NavLink to='/alimentacion-base-plantas' className='text-reset'>
								Alimentacion a base de plantas
							</NavLink>
						</p>
					</div>

					<div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Contacto</h6>
						<p>
							<i className='fab fa-instagram m-1'>
								<img src={mailLogo} alt='Mail Logo' />
							</i>
							palomavaronanutricion@gmail.com
						</p>
						<p>
							<i className='fas fa-phone mr-3'></i> +numero de telefono
						</p>
					</div>

					<div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
						<h6 className='text-uppercase mb-4 font-weight-bold'>Redes</h6>
						<p>
							<a href='#!' className='text-reset'>
								<i className='fab fa-instagram m-1'>
									<img src={instagramLogo} alt='Instagram Logo' />
								</i>
								Instagram
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
