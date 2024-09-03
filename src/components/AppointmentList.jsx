import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ apps,setApps }) => {
  const handleDelete=(id)=>{
    setApps(apps.filter((item)=> item.id !== id))

  }
  const handleDoubleClick=(id)=>{
setApps(apps.map((item)=>item.id === id ? {...item, consulted: !item.consulted} : item))
  }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
      {apps.length < 1 &&  <img src="./img/appointment.jpg" alt="" width="70%"/> }
      {apps.map(({ id, patient, consulted, doctor, day }) => (
        <div key={id} className={consulted ? "appointments consulted" : "appointments"}
        onDoubleClick={()=>handleDoubleClick(id)}>
          <Row className="justify-content-between align-items-center">
            <Col md={6} >
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString("tr")} </h5>
              <h4>Time: {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col className="text-end">
              <TiDelete
                className="text-danger fs-1 "
                type="button"
                onClick={()=>handleDelete(id)}
             
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
