import React from "react";
import Frein from "../assests/p35.jpg"
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const Create = () => {
    return (
        <div className="create">
            <div className="create__first">
                <div className="create__first-img">
                    <span>
                     <img src={Frein} alt=""/>
                    </span>
                </div>
                <div className="create__first-input">
                    <input
                        type="text"
                        className="create__first-inputs"
                        placeholder="Yuvraj what are your mind? "
                    />
                </div>
            </div>
            <div className="create__second">
                <span className="create__second-icon">
                    <FaVideo className="redColor" />{" "}
                    <span className="text">Live Video</span>
                </span>
                <span className="create__second-icon">
                    <FaRegFileImage className="greenColor" />{" "}
                    <span className="text">Photo / Video</span>
                </span>
                <span className="create__second-icon">
                    <FaRegGrinAlt className="orangeColor" />{" "}
                    <span className="text">Feeling</span>
                </span>
            </div>
        </div>
    );
};

export default Create;