import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { toast } from "react-toastify";
import Post from "../Post/Post";


const blog={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin:"30px 0",
    padding:"10px 30px"
}

export default function Blog() {


  const [blogs, setBlogs] = useState([]);

  const searchBlogs = () => {
    const url = `http://localhost:8080/blogs`;
    axios.get(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
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




  return (
    <div style={blog} >
      <Row md={3} className="justify-content-center">
        {
          blogs.map((blog) => {
            return (<Post blog={blog} />)
          })
        }
      </Row>

    </div>
  )



}


