import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../../components/ProfileHeader";
import routes from "../../router/routes";
import CreatureService from "../service/CreatureService";

//Dependency array, c'est quoi?
const creatureService = new CreatureService();

const IndividualCreature = () => {
  const [creature, setCreature] = useState(null);
  const params = useParams();

  const getCreatureById = async () => {
    if (params.id) {
      setCreature(await creatureService.getCreatureById(params.id));
     }
    };

  useEffect(() => {getCreatureById();}, [params]);

  if (creature){
  return (

      <>
        <ProfileHeader
          src= {creature.image}
          loading="lazy"
          alt= {creature.name}
        />  
      </>

  );
} else {
  return null;
}
}; 

export default IndividualCreature;