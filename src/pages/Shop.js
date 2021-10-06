import React, { useContext, useEffect } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TypeBar from '../components/TypeBar.js'
import BrandsBar from '../components/BrandsBar.js'
import DeviceList from '../components/DeviceList.js'
import {Context} from './../index.js';
import {fetchTypes, fetchBrands, fetchDevices} from './../http/deviceAPI.js';
import { observer } from 'mobx-react-lite';



const Shop = observer( () => {

	const {device} = useContext(Context);

	useEffect( () => {
		fetchTypes().then(data => device.setTypes(data));
		fetchBrands().then(data => device.setBrands(data));
		fetchDevices().then(data => device.setDevices(data.rows));
	}, []);


	return (
		<Container>
			<Row className="mt-2">
				<Col md={3}>
					<TypeBar />
				</Col>
				<Col md={9}>
					<BrandsBar />
					<DeviceList />
				</Col>
			</Row>
		</Container>
	)
})

export default Shop;