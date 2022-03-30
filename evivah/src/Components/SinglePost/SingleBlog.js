import moment from "moment";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import Navbar from '../Navbar/Navbar'
import blogProfilePic from '../../img/blogProfilePic.jpeg'
import Footer from "../Footer/Footer";
import blogImg from "../../img/post.jpg"

const blogText = {
    fontSize: "20px",
    color: "#000"
}

export default function SinglePost() {

    //TODO: Profile picture change every author

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
                                    <img className="blog-author-img" src={blogProfilePic} alt="" />
                                    <div className="blog-author-info">
                                        <span className="singlePostAuthor">
                                            <b>
                                                {blog.authorFirstName + " " + blog.authorLastName}
                                            </b>
                                        </span>
                                        <span className="singlePostDate">
                                            {moment(blog.createdTimestamp).format('MMM DD, YYYY')}
                                        </span>
                                        <span style={{fontSize:"14px"}}>
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
            <Footer/>
        </>
    )
}


// insert into blog values(0,"Millennial Couple Managed An Intimate Wedding In The Pandemic",3,"Mumbai","Kehte hain agar kisi cheez ko dil se chaho, to poori kainath use tumse milane ki koshish mein lag jaati hai

// Our couple made us believe in this line from Om Shanti Om. As we all are aware of how struggling the last two years were, the virus has interrupted so many plans. Sagarika Kapoor and Nikhil Mehndiratta are one of the couples who suffered because of the pandemic but managed to turn their intimate wedding into a memorable one.

// The couple had planned their wedding for April 2021. But the second wave hit us all and resulted in the indefinite postponement. Their wedding in New Delhi was in full preparation but just a week before their wedding day, the lockdown was announced. But with proper planning and courage, they hosted their small scale wedding. Their wedding has come as an inspiration for all of the people who are planning to get married amid the pandemic.",0);