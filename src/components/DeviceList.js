import React, {useContext} from 'react';
import {Context} from './../index.js';
import {observer} from 'mobx-react-lite';
import {Row} from 'react-bootstrap';
import DeviceItem from './DeviceItem.js'



const DeviceList = observer( () => {
	const {device} = useContext(Context)
    return (
        <Row>
			  {
			  	device.devices.map( (device) => 
			  		<DeviceItem key={device.id} device={device}/>
			  	)
			  }
		</Row>
    )
}) 

export default DeviceList;
