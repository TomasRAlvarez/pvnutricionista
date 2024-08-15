import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import NDeportiva from "./screens/NDeportiva";
import NAyurvedica from "./screens/NAyurvedica";
import ABPlantas from "./screens/ABPlantas";

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/nutricion-deportiva' element={<NDeportiva />} />
				<Route path='/nutricion-ayurvedica' element={<NAyurvedica />} />
				<Route path='/alimentacion-base-plantas' element={<ABPlantas />} />
			</Routes>
		</>
	);
}

export default App;
