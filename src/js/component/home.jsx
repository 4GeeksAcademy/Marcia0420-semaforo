import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [rojo, setRojo] = useState("secondary")
	const [verde, setVerde] = useState("secondary")
	const [amarillo, setAmarillo] = useState("secondary")


	function cambiaraRojo() {
		setRojo("danger")
		setVerde("secondary")
		setAmarillo("secondary")
	}

	function cambiaraVerde() {
		setVerde("success")
		setRojo("secondary")
		setAmarillo("secondary")
	}

	function cambiaraAmarillo() {
		setVerde("secondary")
		setRojo("secondary")
		setAmarillo("warning")
	}

	return (
		<div className="text-center">
			<h1 className="text-center mt-5"
			style={{color:"white"}}>semaforo</h1>
			<div className="d-flex  flex-column mb-3">
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + rojo}
						onClick={cambiaraRojo}
						style={{ width: "150px", height: "150px" }}
					></button>
				</div>
				<br />
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + verde}
						onClick={cambiaraVerde}
						style={{ width: "150px", height: "150px" }}
					></button>
				</div>
				<br />
				<div className="cols-3 ">
					<button type="button" className={"rounded-circle btn btn-" + amarillo}
						onClick={cambiaraAmarillo}
						style={{ width: "150px", height: "150px" }}
					></button>
				</div>
			</div>

		</div>
	);
};

export default Home;
