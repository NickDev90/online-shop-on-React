import React from 'react';
import {Container, Row, Col, Modal, Form, Button} from 'react-bootstrap';



const CreateType = ({show, onHide}) => {
    return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       	<Form>
       		<Form.Control placeholder="Enter new type name"/>
       	</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
        <Button variant={"outline-success"} onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
};


export default CreateType;
