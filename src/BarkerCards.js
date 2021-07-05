import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./BarkerCards.css";
import axios from './axios';

import SwipeButtons from "./SwipeButtons";

function BarkerCards() {
const [people, setPeople] = useState([]); 


useEffect(() => {
    
    async function fetchData() {
        const req = await axios.get("/barker/cards");

        setPeople(req.data);
    }

    fetchData();
  
}, [])

const redHeartPressed = () => {
    if (people && people.length > 0) {
        swiped('left', people[people.length - 1].name ); 
    }
}

const greenHeartPressed = () => {
    if (people && people.length > 0) {
        swiped('right', people[people.length - 1].name );
    }
}

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);

    let clonedPeople = [...people];
    let swipedDog = clonedPeople.pop();  // remove the last item

    console.log('Handle swiped dog', swipedDog);
    setPeople(clonedPeople);
};

const outOfFrame = (name) => {
    console.log(name + " left the screen!");
};

    return (
        <div className="barkerCards">
            <div className="barkerCards__cardContainer">
                {people.map((person) => (
                 <TinderCard 
                 className="swipe"
                 key={person.name}
                 preventSwipe={["up", "down"]}
                 onSwipe={(dir) => swiped(dir, person.name)}
                 onCardLeftScreen={() => outOfFrame(person.name)}>
                     <div
                         style={{ backgroundImage: `url(${person.imgUrl})` }}
                         className="card">
                            <h3>{person.name}</h3>
                     </div>
                 </TinderCard>
            ))}
            </div>
           
            <SwipeButtons redHeartPressed={redHeartPressed} 
            greenHeartPressed ={greenHeartPressed} 
            />
        </div>
        
    );
}

export default BarkerCards
