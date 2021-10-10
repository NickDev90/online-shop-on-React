import React, {useContext, useEffect, useState} from 'react';
import {Container, Modal, Form, Button, Dropdown, Row, Col} from 'react-bootstrap';
import {Context} from './../../index.js';
import {fetchTypes, fetchBrands, fetchDevices} from './../../http/deviceAPI.js';
import { observer } from 'mobx-react-lite';



const CreateDevice = observer(({show, onHide}) => {

    const {device} = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(el => number !== el.number))
    }

    const selectFile = e => {
        setFile(e.target.files[0]);
    }

    useEffect( () => {
        fetchTypes().then(data => device.setTypes(data));
		fetchBrands().then(data => device.setBrands(data));
    })

    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            {/*<Form.Control placeholder="Enter new type name"/>*/}
            <Dropdown className="mt-3">
                <Dropdown.Toggle>{device.selectedType.name || 'Select a type'}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map( type => 
                        <Dropdown.Item 
                            onClick={() => device.setSelectedType(type)}
                            key={type.id}
                        > 
                            {type.name} 
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-3">
                <Dropdown.Toggle> {device.selectedBrand.name || 'Select a brand'} </Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map( brand => 
                        <Dropdown.Item 
                            key={brand.id}
                            onClick={() => device.setSelectedBrand(brand)}
                        >
                             {brand.name} 
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Form.Control placeholder="Enter name of device" value={name}
                className="mt-3" onChange={e => setName(e.target.value)}/>
            <Form.Control placeholder="Enter price of device" value={price}
                className="mt-3" type="number" onChange={e => setPrice(Number(e.target.value))}/>
            <Form.Control 
                className="mt-3" type="file" onChange={selectFile}/>
            <hr/>
            <Button variant={"outline-dark"} onClick={addInfo}>
                Add specification
            </Button>
            {
                info.map( i => 
                    <Row key={i.number} className="mt-3">
                        <Col md={4}>
                            <Form.Control placeholder="Enter the title of property"/>
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder="Enter the description of property"/>
                        </Col>
                        <Col md={4}>
                            <Button variant={"outline-danger"} 
                             onClick={() => removeInfo(i.number)}
                             >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                )
            }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
    )
});


export default CreateDevice;
