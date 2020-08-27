import React from "react";
import { Header } from "semantic-ui-react";

export default function DisplayCard(props) {
  const { level } = props.pollenData;

  console.log("props.pollenData", props.pollenData);

  return (
    <>
      <Header.Subheader>
        {level ? level : "Info not available"}{" "}
      </Header.Subheader>
    </>
  );
}
