import Container from "react-bootstrap/Container"
import {doctorData} from "../helper/data"
import { Col, Row } from "react-bootstrap"
import AddModal from "./AddModal"
import { useState } from "react"
const Doctors = ({apps,setApps}) => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const handleImgClick=()=>{
  //   handleShow();
  // }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>

  <Row className="justify-content-center"> 
  {doctorData.map(({id,name,dep,img})=>(
    <Col xs={6} md={4} lg={3} key={id} >
  <img src={img} alt="name" className="img-thumbnail doctor-img" onClick={()=> setShow(true)} />
  <h5>{name} </h5>
  <h6>{dep} </h6>
  </Col>
 ))} </Row>
 <AddModal show={show} handleClose={()=> setShow(false)}/>
    </Container>
  )
}

export default Doctors
