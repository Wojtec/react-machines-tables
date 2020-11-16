import React, { Component } from "react";
import { getMachineById, updateMachine } from "../actions";
import CreateMachineJSX from "./createMachines/createMachine";

//EDIT MACHINE COMPONENT

const initValue = {
  id: "",
  brand: "",
  model: "",
  manufacturer: "",
  price: "",
  images: [
    { id: "", type: "thumbnail", url: "" },
    { id: "", type: "lateral_view", url: "" },
  ],
};

class EditMachine extends Component {
  state = {
    value: initValue,
  };
  //set data to state when component is mounted
  componentDidMount = async () => {
    const { id } = this.props;
    const machine = await getMachineById(id);
    initValue.id = machine.id;
    initValue.brand = machine.brand;
    initValue.model = machine.model;
    initValue.manufacturer = machine.manufacturer;
    initValue.price = machine.price;
    initValue.images.map((i, index) => {
      i.id = machine.images[index].id;
      i.type = machine.images[index].type;
      i.url = machine.images[index].url;
      return null;
    });
    this.setState({ value: initValue });
  };
  //make action when component get props
  componentWillReceiveProps = async (nextProps) => {
    const { edit, editResult } = this.props;
    if (nextProps.edit !== edit) {
      const update = await updateMachine(this.state.value);
      if (update) {
        return editResult();
      }
    }
  };
  //handle submit
  handleSubmit = async (event) => {
    event.preventDefault();

    const createMachines = await updateMachine(this.state.value);

    if (createMachines) {
      this.setState((prevState) => {
        const resState = { ...prevState };
        resState.value.images.map((i) => {
          i.url = "";
          i.id = "";
          return null;
        });
        resState.value = initValue;
        return resState;
      });
    }

    return;
  };
  //handle inputs on change
  handleInput = (event) => {
    const { id } = this.props;
    const target = event.target;
    const name = target.name;

    const newSet = { ...this.state.value };
    if (name === "thumbnail" || name === "lateral_view") {
      newSet["images"].map((i) => {
        if (name === i.type) {
          i.url = target.value;
          i.id = Math.random().toString(36).substr(2, 7);
        }
        return null;
      });
    } else {
      newSet[name] = target.value;
      newSet["id"] = id;
    }

    this.setState({
      value: newSet,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <CreateMachineJSX
        value={value}
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      ></CreateMachineJSX>
    );
  }
}

export default EditMachine;
