import Anuj from '../assests/p1.jpg';
import Arun from '../assests/p2.jpg';
import Aryan from '../assests/p3.jpg';
import  Ayush from '../assests/p4.jpg';
import Gourav from '../assests/p5.jpg';
import Karan from '../assests/p6.jpg';
import Prabhu from '../assests/p7.jpg';
import Raghav from '../assests/p8.jpg';
import Saquib from '../assests/p9.jpg';
import Surya from '../assests/p10.jpg';
import Ashwani from '../assests/p11.jpg';

import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: Anuj, name: "Anuj Vishnoi" },
    { id: 2, image: Arun, name: "Arun Pal" },
    { id: 3, image: Aryan, name: "Aryan Pal" },
    { id: 4, image: Ayush, name: "Shobhit Sharma" },
    { id: 5, image: Gourav, name: "Ayush Verma" },
    { id: 6, image: Karan, name: "Raghav Maheshwari" },
    { id: 6, image: Prabhu, name: "Karan singh" },
    { id: 7, image: Raghav, name: "Honey Singh" },
    { id: 8, image: Saquib, name: "Prabhu Bhatia" },
    { id: 9, image: Surya, name: "Vijay Kumar" },
    { id: 10, image: Ashwani, name: "Rohit Singh" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;