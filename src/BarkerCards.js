import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./BarkerCards.css";
import axios from './axios';
import SwipeButtons from "./SwipeButtons";

let alreadyRemoved = [];

function BarkerCards() {
const [people, setPeople] = useState([]); 


useEffect(() => {
    
    async function fetchData() {
        const req = await axios.get("/barker/cards");

        setPeople(req.data);
    }

    if (people?.length === 0) {
        alreadyRemoved = [];
        fetchData();
    }

})

const redHeartPressed = () => {
    if (people && people.length > 0) {
        const name = people[people.length - 1].name
        swiped('left', name );
        outOfFrame( name ); 
    }
}

const greenHeartPressed = () => {
    if (people && people.length > 0) {
        const name = people[people.length - 1].name
        swiped('right', name );
        outOfFrame( name );
    }
}

const swiped = (direction, name) => {
    console.log("removing: " + name);
    alreadyRemoved.push(name);
    let clonedPeople = people.filter(person => !alreadyRemoved.includes(person.name));
   
    console.log('Handle swiped dog', name);
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
