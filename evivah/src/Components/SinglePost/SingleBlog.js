import moment from "moment";
import { useLocation } from "react-router-dom";
import "./singlePost.css";
import Navbar from '../Navbar/Navbar'


const blogText = {
    fontSize: "20px",
    color: "#000"
}

export default function SinglePost() {


    const location = useLocation()
    const blog = location.state.blog
    const blogPara = blog.description.split("\n\n");
    console.log(blog.description);
    console.log(blogPara);


    return (
        <>
            <Navbar />
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <div className="single-blog-top">
                        <div className="single-blog-top-img">
                            <img
                                className="singlePostImg"
                                src={require("../assets/post.jpg")} alt="">

                            </img>
                        </div>
                        <div>

                            <h1 className="singlePostTitle">
                                {blog.title}
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit"></i>
                                    <i className="singlePostIcon fas fa-trash"></i>
                                </div>
                            </h1>

                            <div className="singlePostInfo">
                                <span className="singlePostAuthor">
                                    Author :
                                    <b>
                                        &nbsp;{blog.authorFirstName + " " + blog.authorLastName}
                                    </b>
                                </span>
                                <span className="singlePostDate">
                                    {moment(blog.createdTimestamp).format('MMM DD, YYYY')} (
                                    {moment(blog.createdTimestamp).fromNow()})
                                </span>
                                <span className="singlePostCity">
                                    {blog.weddingCity}
                                </span>
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
        </>
    )
}


// insert into blog values(0,"Millennial Couple Managed An Intimate Wedding In The Pandemic",3,"Mumbai","Kehte hain agar kisi cheez ko dil se chaho, to poori kainath use tumse milane ki koshish mein lag jaati hai

// Our couple made us believe in this line from Om Shanti Om. As we all are aware of how struggling the last two years were, the virus has interrupted so many plans. Sagarika Kapoor and Nikhil Mehndiratta are one of the couples who suffered because of the pandemic but managed to turn their intimate wedding into a memorable one.

// The couple had planned their wedding for April 2021. But the second wave hit us all and resulted in the indefinite postponement. Their wedding in New Delhi was in full preparation but just a week before their wedding day, the lockdown was announced. But with proper planning and courage, they hosted their small scale wedding. Their wedding has come as an inspiration for all of the people who are planning to get married amid the pandemic.",0);