import React, { useState } from "react";
import Freind from "../assests/p12.jpg"
import Sports from "../assests/p13.jpg"
import Faltu from "../assests/p14.jpg"
import Okay from "../assests/p15.jpg"
import Whatsapp from "../assests/p16.jpg"
import Then from "../assests/p17.jpg"

const SideBar = () => {
    const [state, setState] = useState([
        { id: 1, image: Freind , name: "Freinds Forever" },
        { id: 2, image: Sports , name: "Worlds Sports" },
        { id: 3, image: Faltu , name: "Business Agents" },
        { id: 4, image: Okay, name: "Enterprises" },
        { id: 5, image: Whatsapp, name: "World Trade" },
        { id: 6, image: Then, name: "Sweet House" },
    ]);
    return (
        <div className="sidebar">
            {state.map((info) => (
                <div className="sidebar__list" key={info.id}>
                    <div className="sidebar__list-img">
                        <img src={info.image} alt="group image" />
                    </div>
                    <div className="sidebar__list-name">{info.name}</div>
                </div>
            ))}
        </div>
    );
};

export default SideBar;