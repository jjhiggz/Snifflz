import React, { useEffect, useState } from "react";
import { Segment, Header, Card, Icon, Image } from "semantic-ui-react";

export default function DisplayCard(props) {
  const { display_name, level } = props.pollenData;
  const square = { width: 175, height: 175 };

  console.log("props.pollenData", props.pollenData);

  return (
    <>
      <Header.Subheader>
        {level ? level : "Info not available"}{" "}
      </Header.Subheader>
    </>
  );
}
