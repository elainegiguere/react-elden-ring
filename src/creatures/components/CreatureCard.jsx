import React, { useEffect } from "react";
import Card from "../../components/Card";
import BCard from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CreatureService from "../service/CreatureService";
import { useState } from "react";



const creatureService = new CreatureService();

const DEFAULT_IMAGE_POSITION = "top";

const CreatureCard =({ creature, url }) =>{
    const [ data, setData] = useState(null);
    const [shouldShow, setShouldshow] = useState(true);

    const hide = () => setShouldshow(false);

    const getCreature =async () =>
        setData (await creatureService.getCreatureWithReturnedUrl(url));

    useEffect(() => {
        if (url) getCreature();
    }, [url]);

    return(
        data && shouldShow && (
        <Col className="my-3">
            <Card>
                <BCard.Header as= "small">{creature.id}<button onClick={hide}>Close</button></BCard.Header> 
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
        )
    );
};

export default CreatureCard;