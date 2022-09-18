import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import CreatureService from "../service/CreatureService";
import CreatureList from "./CreatureList";


const creatureService = new CreatureService();

const Creatures = () => {
    const [data, setData] = useState ([]);

    const getCreatures = async () => {
        const data = await creatureService.getCreatures();
        setData(data);
    }

    useEffect(() => { getCreatures(); },[]);

    return (
    <Container>
       <CreatureList creatures = {data}/>
    </Container>
    );
};

export default Creatures;
