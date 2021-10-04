import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import CreateType from '../components/Modals/CreateType.js';
import CreateBrand from '../components/Modals/CreateBrand.js';
import CreateDevice from '../components/Modals/CreateDevice.js';


const Admin = () => {
	const [typeVisible, setTypeVisible] = React.useState(false);
	const [brandVisible, setBrandVisible] = React.useState(false);
	const [deviceVisible, setDeviceVisible] = React.useState(false);

	return (
		<Container className="d-flex flex-column">
			<Button variant={"outline-dark"} className="mt-3 p-2" 
				onClick={() => setTypeVisible(true)}
			>
				Add type
			</Button>

			<Button variant={"outline-dark"} className="mt-3 p-2" 
				onClick={() => setBrandVisible(true)}
			>
				Add brand
			</Button>

			<Button variant={"outline-dark"} className="mt-3 p-2" 
				onClick={() => setDeviceVisible(true)}
			>
				Add device
			</Button>

			<CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
			<CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
			<CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
		</Container>
	)
}

export default Admin;