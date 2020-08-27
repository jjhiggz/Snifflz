import React from "react";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const PageFooter = () => {
  const link = { color: "white", marginLeft: 5 };
  const SNIFFLZ_URL = "https://github.com/jjhiggz/Snifflz";
  const JHIGGZ_URL = "https://github.com/jjhiggz";
  const DESCXCRS_URL = "https://github.com/descxcrs";

  return (
    <Segment inverted vertical style={{ padding: "2em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column style={{ textAlign: "center" }}>
              <Header as="h4" inverted>
                SnifflZ
              </Header>
              <p>
                Helping with allergies since the 2020 pandemic ·
                <a href={SNIFFLZ_URL} target="_blank" style={link}>
                  GitHub
                </a>{" "}
                ·
                <a href={JHIGGZ_URL} target="_blank" style={link}>
                  jhiggz
                </a>{" "}
                ·
                <a href={DESCXCRS_URL} target="_blank" style={link}>
                  descxcrs
                </a>{" "}
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default PageFooter;
