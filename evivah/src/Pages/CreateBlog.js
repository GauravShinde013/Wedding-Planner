import "./CreateBlog.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from '../Components/Navbar/Navbar'
import Footer from "../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Paper from '@mui/material/Paper'
import PhotoCamera from '@mui/icons-material/PhotoCamera';


const imgStyle = {
  width: "100%",
  height:"50vh",

  objectFit:"cover"

}
export default function Write() {
  const [title, setTitle] = useState("");
  const [weddingCity, setWeddingCity] = useState("");
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState("");

  const authorId = sessionStorage['id']



  const navigate = useNavigate();

  const save = () => {
    if (title.length === 0) {
      toast.warning("Please Enter Title");
    } else if (weddingCity.length === 0) {
      toast.warning("Please Enter Wedding City");
    } else if (description.length === 0) {
      toast.warning("Please Enter Description");
    } else if (imgFile === "") {
      toast.error("Please Upload Blog Image");
    }
    else if (imgFile && (imgFile.type.includes("image/"))) {
      toast.error("Invalid Image Type.")
    }

    else {
      const body = {
        title,
        weddingCity,
        description,
        authorId,
        imgFile
      };

      const url = `http://localhost:8080/blog/add`;
      console.log(body);
      axios.post(url, body).then((response) => {
        const result = response.data;
        console.log(result);
        if (result["status"] === "success") {
          toast.success("New Blog Added..");
          navigate("/blogs");
        } else {
          toast.error(result["error"]);
        }
      });
    }
  };

  const uploadHandler = (e) => {
    setImgFile(e.target.files[0])
  }






  return (
    <>
      <Navbar />
      <div className="write">
        <div className="create-blog-top">
          <div className="create-blog-top-img">
            <img
              className="writeImg"
              src="https://owpphotos.s3.ap-south-1.amazonaws.com/e7ff659a-ede3-4341-9959-bf9e2eeaf648.jpg" alt=""
            />
          </div>
          <div className="create-blog-top-content">
            <h2>Lets Relive Your Wedding Memories In Words... </h2>
          </div>

        </div>

        <Container className="py-5">
          <Row>

            <Col>
              <Paper sx={{ padding: "50px" }} elevation={12} >

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Blog Title</label>
                  <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Wedding City</label>
                  <input onChange={(e) => setWeddingCity(e.target.value)} type="text" className="form-control" id="exampleFormControlInput1" placeholder="City" />
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                  <textarea onChange={(e) => setDescription(e.target.value)} placeholder="Tell us about your wedding ..." className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <label htmlFor="icon-button-file">
                    Upload Photo:
                    <input
                      onChange={uploadHandler}
                      accept="image/*"
                      style={{ display: "none" }}
                      id="icon-button-file" type="file"
                    />
                    <PhotoCamera color="primary" sx={{ marginLeft: "6px", cursor: "pointer" }} />
                  </label>

                  <button onClick={save} style={{ backgroundColor: "#1976d2", padding: "7px 12px", borderRadius: "12px" }}>Publish</button>
                </div>

              </Paper>
            </Col>
            <Col md={4}>
              <Paper sx={{ width: "400px", padding: "40px 20px" }}>
                <h4 style={{paddingBottom:"10px"}} > Image Preview </h4>
                {imgFile && <img style={imgStyle} src={URL.createObjectURL(imgFile)} alt={imgFile.name} />}
              </Paper>
            </Col>
          </Row>
        </Container>

      </div>
      <Footer />
    </>
  );
}

//blogId, String title, String weddingCity, String description, Date createdTimestamp,
//int authorId, String authorFirstName, String authorlastName



