import React, {useContext, useState} from 'react';
import {Container, Modal, Form, Button, Dropdown, Row, Col} from 'react-bootstrap';
import {Context} from './../../index.js';


const CreateDevice = ({show, onHide}) => {

    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(el => number !== el.number))
    }

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
                <Dropdown.Toggle>Select a type</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.types.map( type => 
                        <Dropdown.Item> {type.name} </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mt-3">
                <Dropdown.Toggle>Select a brand</Dropdown.Toggle>
                <Dropdown.Menu>
                    {device.brands.map( brand => 
                        <Dropdown.Item key={brand.id}> {brand.name} </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <Form.Control placeholder="Enter the name of device" 
                className="mt-3"/>
            <Form.Control placeholder="Enter the price of device"
                className="mt-3" type="number"/>
            <Form.Control 
                className="mt-3" type="file"/>
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
};


export default CreateDevice;
