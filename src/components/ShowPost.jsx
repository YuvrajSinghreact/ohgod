import React from "react";
import Frein from "../assests/p18.jpg"
import Whenever from "../assests/p19.jpg"
import Soo from "../assests/p20.jpg"
import long from "../assests/p21.jpg"
import elaichi from "../assests/p22.jpg"
import Neha from "../assests/p23.jpg"
import Riya from "../assests/p24.jpg"
import Good from "../assests/p27.jpg"

import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
const ShowPost = () => {
    const [state, setState] = React.useState([
        {
            id: 1,
            userImg: Frein, name: "../assests/p19.jpg",
            name: "Ram Prakash",
            time: "2h",
            text:
                "Aaj Ka Din Bhut Acha Raha,\
        Maja Agya",
            postImg: long, name: "Ram Prakash",
        },
        {
            id: 2,
            userImg: Whenever, name: "../assests/p20.jpg",
            name: "Sajjad Khan",
            time: "4h",
            text:
                "Teri Hassi Pe Ham Deewane,\
        Love You",
            postImg: Riya, name: "../assests/p26.jpg",
            name: "Sajjad Khan"
        },
        {
            id: 3,
            userImg: Soo , name: "../assests/p21.jpg",
            name: "Rahul",
            time: "2h",
            text:
                "Dil Ko Chu Liya,\
        Radhe Radhe",
            postImg: Neha, name: "../assests/p23.jpg",
            name: "Rahul"
        },
        {
            id: 4,
            userImg: elaichi, name: "../assests/p22.jpg",
            name: "David",
            time: "2h",
            text:
                "My Attitude None Of You Attitude,\
        #JalwaHai",
            postImg: Good, name: "../assests/p27.jpg",
            name: "David"
        },
    ]);
    return (
        <div className="show">
            {state.map((post) => (
                <div key={post.id} className="empty">
                    <div className="show__header">
                        <div className="show__header-img">
                            <img src={post.userImg} alt="user" />
                        </div>
                        <div className="show__header-name">
                            {post.name} <div className="date">{post.time}</div>
                        </div>
                    </div>
                    <div className="show__body">
                        <div className="show__body-text">{post.text}</div>
                        <div className="show__body-img">
                            <img src={post.postImg} alt="post" />
                        </div>
                    </div>
                    <div className="show__reactions">
                        <span className="reactions">
                            <FaRegThumbsUp /> <span className="reactions-text">Like</span>
                        </span>
                        <span className="reactions">
                            <FaRegCommentAlt />{" "}
                            <span className="reactions-text">Comments</span>
                        </span>
                        <span className="reactions">
                            <FaShareAlt /> <span className="reactions-text">Share</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowPost;