import React, { useEffect, useState } from "react";
import Card from "../Card";
import { getProgressColor } from "../Card/useCardHelper";
import { useGetContextContent } from './../ContextMenu/useGetContextConent';

const Section = () => {
  const listContextItems                    = useGetContextContent();
  const [currentClickedCard, setCardIndex]  = useState(-1);

  const whatCardClicked = (index) => {
    setCardIndex(index);
  }

  useEffect(() => {
    window.addEventListener("click", e => {
      setCardIndex(-1);
    });
    return (() => {
      window.removeEventListener("click", e => {
        setCardIndex(-1);
      });
    })
  }, []);
  
  return (
    <div>
      {Array(40).fill(2).map((_, index) => {
        return (
          <Card
            key={"_card_" + index}
            userId={1}
            cardIndex={index}
            imageUrl={"/avatar/gentlement.png"}
            status={"active"}
            name={"Alfie Harrison"}
            description={"Sydney, Australia"}
            position={"Stratery director"}
            progress={40}
            progressColorCode={getProgressColor()}
            listContextItems={listContextItems}
            allowOpenContextMenu={currentClickedCard === index}
            whatCardClicked={whatCardClicked}
            listTeammateImages={Array(Math.floor(Math.random() * (10 - 3) + 3)).fill("/avatar/gentlement.png")}
          />
        )
      })}
    </div>
  )
}

export default Section;