import React from 'react';
import {Container, Image, Row, Card, Col, Button} from 'react-bootstrap';
import bigStar from '../assets/IMG/Star.png'


const DevicePage = () => {
	const device = {id:1, name: 'Iphone 12 pro', price: 3000, rating: 5, img: 'https://www.refurbed.pl/files/pi/iphone-12-pro-max-1607341850.jpg'}
	const description = [
		{id:1, title: 'RAM', description: '5 Gb'},
		{id:2, title: 'Camera', description: '12 Mp'},
		{id:3, title: 'CPU', description: 'Intel i-5 9th gen'},
		{id:4, title: 'Number of cores', description: '2'},
		{id:5, title: 'Battery', description: '8000mAh'},
	]
	return (
		<Container className="mt-5 pb-5">
			<Row>
				<Col md={4}>
					<Image src={device.img} style={{width: '100%'}}/>
				</Col>
				<Col md={4}>
					<Row className="d-flex flex-column align-items-center text-center">
						<h2>{device.name}</h2>
						<div className="d-flex align-items-center justify-content-center"
							style={{background: `url(${bigStar}) no-repeat center center`,
							 width: 200, height: 200, backgroundSize: 'cover', fontSize: 64}}>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card className="d-flex flex-column align-items-center justify-content-around"
					style={{width: '100%', height: '100%'}}>
						<h3>from {device.price} PLN</h3>
						<Button variant={"outline-dark"}>Add to the Cart</Button>
					</Card>
				</Col>
			</Row>
			<Row className="mt-5 d-flex flex-column ">
				<h2>Specifications</h2>
				{description.map( (info, index) => 
					<Row key={info.id} 
						style={{background: index % 2 === 0 ? '#C4C4C4' : 'transparent',
						padding: 10, fontSize: 18}}>
						{info.title} : {info.description}
					</Row>
					
				)}
			</Row>
		</Container>
	)
}

export default DevicePage;