import React, { Component } from "react";
import { getMachines } from "../actions";

class Main extends Component {
  state = {
    machines: [],
  };

  async componentDidMount() {
    const machines = await getMachines();

    this.setState({
      machines,
    });
  }

  getAllMachines() {
    const { machines } = this.state;

    const elements = machines.map((m) => (
      <div>
        <h1>{m.brand}</h1>
        <img alt="img" src={m.images[0].url}></img>
        <p>Manufacturer: {m.manufacturer}</p>
        <p>Model: {m.model}</p>
        <p>Price: {m.price}</p>
      </div>
    ));

    return elements;
  }

  render() {
    console.log(this.state.machines);
    return (
      <div>
        <div>main</div>
        {this.getAllMachines()}
      </div>
    );
  }
}

export default Main;
