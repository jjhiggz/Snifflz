import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function DisplayCard(props) {
  return (
  <div>
    <Card>
      <Image src='' wrapped ui={false} />
      <Card.Content>
        <Card.Header>WEATHER TYPE</Card.Header>
        <Card.Meta>
          <span className='date'>Message about weather type</span>
        </Card.Meta>
        <Card.Description>
          Description about what is going on with the weather
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span>rate from one to 5 here</span>
      </Card.Content>
    </Card>
  </div>
  )
}