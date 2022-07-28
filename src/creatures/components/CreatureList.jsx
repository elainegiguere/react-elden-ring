import React from "react";
import CreatureCard from "./CreatureCard";
import Row from "react-bootstrap/Row";

const CreatureList =({creatures}) => {
    return(

    <Row>
        {creatures.map((creature) => (
            <CreatureCard key= {creature.id} creature = {creature}/>
        ))}
    </Row>
);
};

export default CreatureList;