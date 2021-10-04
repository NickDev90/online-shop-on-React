import React, {useContext} from 'react';
import {Context} from './../index.js';
import {observer} from 'mobx-react-lite';
import {Row, Card} from 'react-bootstrap';



const BrandsBar = observer( () => {
	const {device} = useContext(Context)

    return (
        <Row>
			  {
			  	device.brands.map( (brand) => 
			  		<Card key={brand.id} style={{cursor: 'pointer', width: 'auto', marginRight: 10}}
			  			className="p-2" 
			  			border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
			  			onClick={() => device.setSelectedBrand(brand)}
				  	>

			  				{brand.name}

			  		</Card>
			  	)
			  }
		</Row>
    )
}) 

export default BrandsBar;
