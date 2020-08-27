import React from "react";
import { Grid, Segment, Header, Image, Container } from "semantic-ui-react";
import DisplayCard from "./DisplayCard";
import grassImg from "../Images/009-grass-2.svg";
import treeImg from "../Images/013-park.svg";
import weedImg from "../Images/010-grass-3.svg";

const Results = ({ pollenData }) => {
  const { day, grass, tree, weed } = pollenData;
  const square = {
    width: 300,
    height: 300,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const backgroundGradient =
    "linear-gradient(0deg, rgba(255,239,158,1) 0%, rgba(255,239,157,1) 59%, rgba(255,249,216,1) 100%)";

  return (
    <Segment
      style={{ padding: "8em 0em", background: backgroundGradient }}
      vertical
    >
      <Grid container stackable columns={3}>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Segment circular inverted style={square}>
              <Image centered src={grassImg} size="small" />
              <Header as="h2" inverted>
                Grass
                <DisplayCard pollenData={grass} />
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment circular inverted style={square}>
              <Image centered src={treeImg} size="small" />
              <Header as="h2" inverted>
                Tree
                <DisplayCard pollenData={tree} />
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment circular inverted style={square}>
              <Image centered src={weedImg} size="small" />
              <Header as="h2" inverted>
                Ragweed
                <DisplayCard pollenData={weed} />
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default Results;
