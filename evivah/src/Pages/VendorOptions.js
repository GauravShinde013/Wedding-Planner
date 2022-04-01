import { Col, Container, Row } from 'react-bootstrap';
import Imageslider from '../Components/Imageslider/Imageslider';
import Navbar from '../Components/Navbar/Navbar';
import Roles from '../Components/Roles';
import plannerLogo from "../img/planner.png";
import vendorLogo from "../img/vendor.png";
import backgroundImg from "../img/vendorOptions.png";


const backStyle = {
  padding: "115px 0",
  background: `url(${backgroundImg}) center center/cover no-repeat`,
  width: "100%",
  objectFit: "cover"
}
const MasterServicesHome = () => {

  const plannerMsg = "I Can Plan Your Whole Wedding"
  const vendorMsg = "I Offer You Specialized Services"

  return (
    <div>
      <Navbar />
        {/* <Imageslider/>  */}

      <div style={backStyle}>
        <Container>

          <Row >
            <Col md lg="3" sm={1}></Col>
            <Col md lg="3" sm={1}></Col>
            <Col className="d-flex justify-content-center" sm md lg="3" >
              <Roles title="Planner" src={plannerLogo} msg={plannerMsg} />
            </Col>
            <Col className="d-flex justify-content-center" sm md lg="3" >
              <Roles title="Vendor" src={vendorLogo} msg={vendorMsg} />
            </Col>
          </Row>
        </Container>
      </div>
     

    </div>
  )
}

export default MasterServicesHome




