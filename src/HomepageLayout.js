import 'semantic-ui-css/semantic.min.css'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import {
  Image,
  Container,
  Header,
  Segment,
} from 'semantic-ui-react'
import { ZipForm } from './Components/ZipForm'
import Results from './Components/Results'

const BREEZE_O_METER_API_KEY = 'aa2ca4cd977844dba365b5d0434ec9e6'
const GOOGLE_MAPS_API_KEY = 'AIzaSyD3At_jejDYID03nsPV38JNuj_JClsSf58'
const ZIP_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?key='+ GOOGLE_MAPS_API_KEY + '&components=postal_code:'

const getBreezeURL = (lat, lng, key) => {
  return `https://api.breezometer.com/pollen/v2/forecast/daily?lat=${lat}&lon=${lng}&key=${key}&days=3`
}


/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
export const HomepageHeading = ({ setZip }) => (
  <Container 
  text>
    <Header
      as='h1'
      content='SnifflZ'
      inverted
      style={{
        fontSize:'4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop:'3em',
      }}
    />
    <Header
      as='h2'
      content='Tis the season to quit sneezin'
      inverted
      style={{
        fontSize:  '1.7em',
        fontWeight: 'normal',
        marginTop: '1.5em',
      }}
    />
    <ZipForm
      setZip={setZip}
    />
  </Container>
)

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({ setZip }) => {

    return (
          <Segment
            inverted
            textAlign='center'
            style={{  
              padding: '1em 0em',
              backgroundImage: `url(${"https://i.imgur.com/Ysfo7fk.jpg"})`,
          }}
            vertical
            
          >
            <HomepageHeading
              setZip={setZip}
              style={{
                height: '100%'
              }}
            />
          </Segment>
    )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => {
  const [ zip , setZip ] = useState('')
  const [ coord, setCoord ] = useState({
    isEmpty: true,
    lat:0,
    lng:0,
  })
  const [ pollen, setPollen ] = useState({})
  // const [ fireScore, setFireScore ] = useState( null )
  // const [ airscore, airScore ] = useState( null )
  

  useEffect(()=>{
    // https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters
    const MAPS_URL = ZIP_ENDPOINT + zip
    

    fetch(MAPS_URL)
      .then(response => response.json())
      .then(returnObject => {
        let results = returnObject.results
        if( results.length > 0 && results[0].hasOwnProperty('geometry')){
          const location = returnObject.results[0].geometry.location
          setCoord({
            lat:location.lat,
            lng:location.lng,
            isEmpty:false,
          })
          fetchPollen( location.lat, location.lng )
        }
      })
    
    

  }, [zip] )

  const fetchPollen = (lat, lng) => {
    const URL = getBreezeURL(lat, lng, BREEZE_O_METER_API_KEY)
    fetch( URL )
      .then( response => response.json( ))
      .then( result => {
        const results = result.data[0]
        setPollen( results )
      })
  }

  return (
  <>
    <DesktopContainer
      setZip={ setZip }
    />
    <Results
      pollenData={ pollen }
    />
  </>

)}

export default HomepageLayout