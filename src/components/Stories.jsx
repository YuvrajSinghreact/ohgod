import React from "react";
import Aswan from '../assests/p29.jpg';
import rakhi from '../assests/p30.jpg';
import Ash from '../assests/p31.jpg';
import What from '../assests/p33.jpg';


const Stories = () => {
    const [state, setState] = React.useState([
        { id: 1, image: Aswan , name: "Diwali" },
        { id: 2, image: rakhi , name: "Birthday Boy" },
        { id: 3, image: Ash, name: "Rakhi" },
        { id: 4, image: What , name: "New Car" },
    ]);
    return (
        <div className="stories">
            {state.map((story) => (
                <div className="stories__col" key={story.id}>
                    <div className="stories__body">
                        <img src={story.image} alt="stories" />
                        <div className="stories__body-overlay">
                            <div className="stories__body-overlay-img">
                                <img src={story.image} alt="" />
                            </div>
                            <div className="stories__body-name">{story.name}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stories;