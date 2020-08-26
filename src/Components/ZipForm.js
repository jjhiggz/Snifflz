import React, { Component } from "react";
import { Form } from "semantic-ui-react";
export class ZipForm extends Component {
  state = { zip: "" };

  handleChange = (e, { name, value }) => {
    if (value.length <= 5) {
      console.log("hit");
      this.setState({ [name]: value });
    }
  };

  handleSubmit = () => {
    console.log("submitting zipcode");
    this.props.setZip(this.state.zip);
  };

  render() {
    const { zip } = this.state;
    const { handleSubmit } = this;

    return (
      <>
        <Form size="huge" onSubmit={handleSubmit}>
          <Form.Group
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form.Input
              placeholder="Enter Your Zipcode"
              name="zip"
              type="number"
              value={zip}
              onChange={this.handleChange}
            />
            <Form.Button
              fluid
              size="huge"
              content="Submit"
              style={{
                marginTop: "1.5em",
              }}
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}
