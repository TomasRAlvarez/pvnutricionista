import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo-2.png";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isScrolled }) => {
	return (
		<Navbar
			id='navBar'
			expand='lg'
			className={`position-fixed w-100 ${isScrolled ? "scrolled" : ""}`}
			sticky='top'>
			<Container>
				<Link to='/'>
					<img src={logo} width='150' className='d-inline-block align-top' alt='Logo' />
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-center'>
					<Nav className='w-75 justify-content-evenly '>
						<Nav.Link href='/' className='text-center text-light'>
							Inicio
						</Nav.Link>
						<Nav.Link href='/nutricion-deportiva' className='text-center text-light'>
							Nutricion Deportiva
						</Nav.Link>
						<Nav.Link href='/nutricion-ayurvedica' className='text-center text-light'>
							Nutricion Ayurvédica
						</Nav.Link>
						<Nav.Link href='/alimentacion-base-plantas' className='text-center text-light'>
							Alimentacion a base de plantas
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
