import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TypeBar from '../components/TypeBar.js'
import BrandsBar from '../components/BrandsBar.js'
import DeviceList from '../components/DeviceList.js'


const Shop = () => {
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
}

export default Shop;