import moment from "moment";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer";
import blogDefault from "../../img/blogDefault.png"

const blogText = {
    fontSize: "20px",
    color: "#000"
}

export default function SinglePost() {


    const location = useLocation()
    const blog = location.state.blog
    const blogPara = blog.description.split("\n");



    return (
        <>
            <Navbar />
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <div className="single-blog-top">
                        <div className="single-blog-top-img">
                            <img
                                className="singlePostImg"
                                src={blog.blogImageLink} alt="">
                            </img>
                        </div>
                        <div className="single-blog-top-content">
                            <h1 className="singlePostTitle">
                                {blog.title}
                            </h1>

                            <div className="singlePostInfo">
                                <div className="blog-author-content" >
                                    <img
                                        className="blog-author-img"
                                        src={blog.authorProfileUrl ? blog.authorProfileUrl : blogDefault}
                                        alt=""
                                    />
                                    <div className="blog-author-info">
                                        <span className="singlePostAuthor">
                                            <b>
                                                {blog.authorFirstName + " " + blog.authorLastName}
                                            </b>
                                        </span>
                                        <span className="singlePostDate">
                                            {moment(blog.createdTimestamp).format('MMM DD, YYYY')}
                                        </span>
                                        <span style={{ fontSize: "14px" }}>
                                            {blog.weddingCity}
                                        </span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                    <p className="singlePostDesc">{blogPara.map((para) => {
                        return (
                            <>
                                <p style={blogText} key={blog.blogId}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{para}
                                    <br />
                                </p>
                            </>
                        )
                    })}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
