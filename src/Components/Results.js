import React from "react";
import { Grid, Segment, Header, Image, Button } from "semantic-ui-react";
import DisplayCard from "./DisplayCard";
import grassImg from "../my-icons-collection/009-grass-2.svg";
import treeImg from "../my-icons-collection/013-park.svg";
import weedImg from "../my-icons-collection/010-grass-3.svg";

const Results = ({ pollenData }) => {
  const { day, grass, tree, weed } = pollenData;
  const square = { width: 300, height: 300 };

  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable columns={3}>
        <Grid.Row centered>
          <Grid.Column>
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
