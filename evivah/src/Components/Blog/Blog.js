import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Post from "../Post/Post";


const blog = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "30px 0",
  padding: "10px 30px"
}

export default function Blog() {


  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const itemPerPage = 3;



  const handleChange = (event, value) => {
    setPage(value)
  }


  const searchBlogs = () => {
    const url = `http://localhost:8080/blogs`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] === "success") {
        setBlogs(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    })
      .catch((err) => console.log(err))
  };



  useEffect(() => {
    searchBlogs();
  }, []);

  useEffect(() => {
    setNoOFPages(Math.ceil((blogs.length / itemPerPage)))
  }, [blogs.length])


  const [noOfPages, setNoOFPages] = useState(
    (blogs.length / itemPerPage).toFixed(0)
  )




  return (

    <div>
      <div style={blog} >

        <Row md={3} className="justify-content-center">
          {
            blogs.slice((page - 1) * itemPerPage, page * itemPerPage).map((blog) => {
              return (<Post blog={blog} />)
            })

          }
        </Row>
      </div>
      <br />
      <Pagination
        sx={{
          display:"flex",
          justifyContent: "center",
        }}
        count={noOfPages}
        color="secondary"
        defaultPage={page}
        onChange={handleChange}
        showFirstButton
        showLastButton
        hideNextButton
        hidePrevButton
        className="text-center"

      />
      <br />
    </div>


  )



}


