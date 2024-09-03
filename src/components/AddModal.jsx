import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose ,apps,setApps,drName}) {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
   const handleSubmit=(e)=>{
    e.preventDefault();
    setApps([...apps, {
        id:new Date().getTime(),
        patient: name,
        day: date,
        consulted: false,
        doctor: drName
    }])
    handleClose();
   }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for {drName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name"onChange={(e)=>setName(e.target.value)} />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Dat&Time</Form.Label>
              <Form.Control type="datetime-local" placeholder="date" onChange={(e)=>setDate(e.target.value)} value={date} />
            </Form.Group>
            <div className="text-center ">
              <Button variant="success" type="submit" className="me-2">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
