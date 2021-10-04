import React, { PropTypes } from 'react';
import {Col, Card, Image} from 'react-bootstrap';
import star from '../assets/IMG/Vector.svg'
import {useHistory} from 'react-router-dom';
import {DEVICE_ROUTE} from './../utils/consts.js';




const DeviceItem = ({ device }) => {
	const history = useHistory();
	console.log(history)

    return (
        <Col md={3} className="mt-5">
        	<Card style={{width: 'auto', cursor: 'pointer'}} border={'light'}
        	onClick={()=> history.push(DEVICE_ROUTE + '/' + device.id)}>
        		<Image  src={device.img}/>
        		<div className="text-black-50 d-flex justify-content-between mt-1">
        			<div>Samsung...</div>
        			<div className="d-flex">
        				<div>{device.rating}</div>
        				<Image src={star}/>
        			</div>
        		</div>
        		<div>{device.name}</div>
        	</Card>
        </Col>
    );
};


export default DeviceItem;
