import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name,hp,sprites}) {
  //console.log(spritesFront)
  const [sprite,setSprite] = useState('front')

  function handleSprite() {
    // if (sprite === 'front') {
    //   setSprite('back')
    // } else {
    //   setSprite('front')
    // }
    setSprite((prevSprite) => (prevSprite === "front" ? "back" : "front"));
  }

  return (
    <Card>
      <div onClick={handleSprite}>
        <div className="image">
          <img src={sprites[sprite]} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
