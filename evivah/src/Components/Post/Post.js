import "./post.css";
import { useNavigate } from 'react-router'

export default function Post({ blog }) {
  blog.title=titleCase(blog.title)


  let blogTxt=blog.description.substring(0,100)+"..."

  function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    
    return splitStr.join(' '); 
 }

const navigate=useNavigate()



  return (

    <div class="card m-1" style={{ width: "18rem" }}>
      <img
        className="post-img"
        src={blog.blogImageLink} alt="" />
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blogTxt}</p>
        <button onClick={()=>{
          navigate("/blogs/single-blog",{state:{blog:blog}})
        }} className="btn btn-primary" to="#">Read More</button>
      </div>
    </div>


  )
}
//blogId, String title, String weddingCity, String description, Date createdTimestamp,
//int authorId, String authorFirstName, String authorlastName