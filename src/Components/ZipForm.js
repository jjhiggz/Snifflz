import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
export class ZipForm extends Component {
  state = { zip: '' };

  handleChange = (e, { name, value }) => {
    if(
      value.length <= 5
    ){
      console.log('hit')
      this.setState({ [ name ]: value });
    }
  };

  handleSubmit = () => {
    console.log('submitting zipcode');
    this.props.setZip(this.state.zip);
  };

  render() {
    const { zip } = this.state;
    const { handleSubmit } = this;

    return (
      <div>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Input
              placeholder="Enter Your Zipcode"
              name="zip"
              type="number"
              value={zip}
              onChange={this.handleChange} />
            <Form.Button
              content="Submit" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
