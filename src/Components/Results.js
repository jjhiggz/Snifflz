import React from "react";
import { Grid, Segment, Header, Image, Button } from "semantic-ui-react";
import DisplayCard from "./DisplayCard";

const Results = ({ pollenData }) => {
  const { day, grass, tree, weed } = pollenData;
  const square = { width: 175, height: 175 };

  return (
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable columns={3}>
        <Grid.Row centered>
          <Grid.Column>
            <DisplayCard pollenData={grass} />
          </Grid.Column>
          <Grid.Column>
            <DisplayCard pollenData={tree} />
          </Grid.Column>
          <Grid.Column>
            <DisplayCard pollenData={weed} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
export default Results;
