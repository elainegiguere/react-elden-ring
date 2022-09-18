import React, { useEffect } from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CreatureService from "../service/CreatureService";
import { useState } from "react";



const creatureService = new CreatureService();

const DEFAULT_IMAGE_POSITION = "top";

const CreatureCard =({ creature }) =>{
   
    return(
       
        <Col className=" my-3">
            <Card>
                <BCard.Header as= "small">{creature.id}</BCard.Header> 
                <BCard.Body>
                    <BCard.Img
                    variant= {DEFAULT_IMAGE_POSITION}
                    src= {creature.image}
                    loading="lazy"
                    alt= {creature.name}/>
                </BCard.Body>
                <BCard.Title>{creature.name}</BCard.Title>
            </Card>
        </Col>
       
    );
};

export default CreatureCard;