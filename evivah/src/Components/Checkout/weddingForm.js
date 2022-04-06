import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";


const WeddingForm = ({next}) => {
  const [bridesName, setBridesName] = useState("")
  const [groomsName, setGroomsName] = useState("")
  const [weddingCity, setweddingCity] = useState("")
  const [guestCount, setGuestCount] = useState(0)
  const [weddingDate, setWeddingDate] = useState()

  const weddingDataHandler = () => {
    const todaysDate=new Date()
    const selectedDate=new Date(weddingDate)

    if (bridesName.length === 0) {
      toast.warning('please enter brides name')
    } else if (groomsName.length === 0) {
      toast.warning('please enter grooms name')
    }
    else if (weddingCity.length === 0) {
      toast.warning('please enter wedding city')
    }
    else if (guestCount === 0) {
      toast.warning('please enter guest count')
    }else if(selectedDate<todaysDate || weddingDate===undefined){
      toast.error("Please Select Valid Date")
    }
    else{
      next({bridesName,groomsName,weddingCity,guestCount,weddingDate})
    }
  }


  return (
    <div>
      <div className="row w-100">
        <div className="col"></div>
        <div className="col">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 800,
                height: 650,
              },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <h3>Please fill your wedding details</h3>
              <Form>
                <Form.Group
                  className="mb-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Bride's Name</Form.Label>
                  <Form.Control value={bridesName} onChange={(e) => setBridesName(e.target.value)} type="text" placeholder="" required />
                </Form.Group>
                <Form.Group
                  className="mb-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Groom's Name</Form.Label>
                  <Form.Control onChange={(e) => setGroomsName(e.target.value)}
                    type="text" placeholder="" required />
                </Form.Group>
                <Form.Group
                  className="mb-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Wedding City</Form.Label>
                  <Form.Control
                    onChange={(e) => setweddingCity(e.target.value)}
                    type="text"
                    placeholder="city"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Guest Count</Form.Label>
                  <Form.Control onChange={(e) => setGuestCount(e.target.value)} type="number" placeholder="" required />
                </Form.Group>

                <Form.Group
                  className="mb-6"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Wedding Date</Form.Label>
                  <Form.Control onChange={(e) => setWeddingDate(e.target.value)} type="date" placeholder="" required />
                </Form.Group>
              </Form>

              <Button variant="Info" style={{ marginTop: "10px", marginLeft: "500px" }} >
                <button onClick={weddingDataHandler} type="submit" class="btn btn-primary">
                  Next
                </button>
              </Button>
            </Paper>
          </Box>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default WeddingForm;
