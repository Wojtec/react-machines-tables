import React, { Component } from "react";
import { getMachineById } from "../actions";
import { Row, Col, Button, Container } from "reactstrap";

class CardMachine extends Component {
  state = {
    id: this.props.id || "1",
    machine: {},
    onLoad: false,
  };

  async componentDidMount() {
    const machine = await getMachineById(this.state.id);

    this.setState({
      machine,
      onLoad: true,
    });
  }

  componentWillReceiveProps = async (nextProps) => {
    const { id } = this.props.id;
    if (nextProps.id !== id) {
      const machine = await getMachineById(nextProps.id);
      this.setState({
        id,
        machine,
      });
    }
  };

  getMachineById() {
    const { machine, onLoad } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <h1>{machine.brand}</h1>
            {onLoad ? (
              <img style={{ width: "400px" }} src={machine.images[1].url}></img>
            ) : null}
            <p>Manufacturer: {machine.manufacturer}</p>
            <p>Model: {machine.model}</p>
            <p>Price: {machine.price}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  render() {
    return <div>{this.getMachineById()}</div>;
  }
}

export default CardMachine;
