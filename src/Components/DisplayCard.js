import React, { useEffect, useState } from "react";
import { Segment, Header, Card, Icon, Image } from "semantic-ui-react";

export default function DisplayCard(props) {
  const { display_name, level } = props.pollenData;

  const square = { width: 175, height: 175 };

  console.log("props.pollenData", props.pollenData);

  return (
    <div>
      <Segment circular inverted style={square}>
        <Header as="h2" inverted>
          {display_name}
          <Header.Subheader>{level ? level : "Not found"} </Header.Subheader>
        </Header>
      </Segment>
    </div>
  );
}
