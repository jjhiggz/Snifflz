import { Container, Header, Segment } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { ZipForm } from "./Components/ZipForm";
import Results from "./Components/Results";
import PageFooter from "./Components/PageFooter";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import "./HomepageLayout.css";

const BREEZE_O_METER_API_KEY = "aa2ca4cd977844dba365b5d0434ec9e6";
const GOOGLE_MAPS_API_KEY = "AIzaSyD3At_jejDYID03nsPV38JNuj_JClsSf58";
const ZIP_ENDPOINT =
  "https://maps.googleapis.com/maps/api/geocode/json?key=" +
  GOOGLE_MAPS_API_KEY +
  "&components=postal_code:";

const getBreezeURL = (lat, lng, key) => {
  return `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${lng}&key=${key}&days=3`;
};

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
export const HomepageHeading = ({ setZip }) => (
  <Container text>
    <Header
      className="snifflzTitle"
      as="h1"
      content="SnifflZ"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "2em",
      }}
    />
    <Header
      as="h2"
      content="Tis the season to quit sneezin"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginBottom: "1.5em",
      }}
    />
    <Container style={{ marginTop: "2em", marginBottom: "2em" }}>
      <ZipForm setZip={setZip} />
    </Container>
  </Container>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ setZip }) => {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{
        padding: "1em 0em",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1574193087288-ab6c6ef2933c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"})`,
        backgroundSize: "cover",
      }}
      vertical
    >
      {" "}
      <Header as="h2" textAlign="left" inverted style={{ paddingLeft: 20 }}>
        Today is...
      </Header>
      <HomepageHeading
        setZip={setZip}
        style={{
          height: "100%",
        }}
      />
    </Segment>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

const HomepageLayout = () => {
  const [zip, setZip] = useState("");
  const [coord, setCoord] = useState({
    isEmpty: true,
    lat: 0,
    lng: 0,
  });
  const [pollen, setPollen] = useState({
    day: 0,
    grass: {},
    tree: {},
    weed: {},
  });
  // const [ fireScore, setFireScore ] = useState( null )
  // const [ airscore, airScore ] = useState( null )

  useEffect(() => {
    document.title = "Snifflz.";
    // https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters
    const MAPS_URL = ZIP_ENDPOINT + zip;

    fetch(MAPS_URL)
      .then((response) => response.json())
      .then((returnObject) => {
        let results = returnObject.results;
        if (results.length > 0 && results[0].hasOwnProperty("geometry")) {
          const location = returnObject.results[0].geometry.location;
          setCoord({
            lat: location.lat,
            lng: location.lng,
            isEmpty: false,
          });
          fetchPollen(location.lat, location.lng);
        }
      });
  }, [zip]);

  const fetchPollen = (lat, lng) => {
    const URL = getBreezeURL(lat, lng, BREEZE_O_METER_API_KEY);
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        //* * results contains Day and Pollen Types info
        const results = result.data[0];
        //* * the date is important to have, but we need to track pollen types!!
        const pollenTypes = results.types;
        let { grass, tree, weed } = results.types;
        //* * tracks pollen level (high, low, medium)
        grass.level = Object.entries(grass.index)[1][1];
        tree.level = Object.entries(tree.index)[1][1];
        weed.level = Object.entries(weed.index)[1][1];

        setPollen({
          day: results.date,
          grass: pollenTypes.grass,
          tree: pollenTypes.tree,
          weed: pollenTypes.weed,
        });
      });
  };

  return (
    <>
      <DesktopContainer setZip={setZip} />
      <Results pollenData={pollen} />
      <PageFooter />
    </>
  );
};

export default HomepageLayout;
