import React, { Component } from "react";
import { createMachine } from "../../actions";
import CreateMachineJSX from "./createMachine";

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

class NewMachine extends Component {
  state = {
    value: initValue,
  };
  //Make action when component receive props
  componentWillReceiveProps = async (nextProps) => {
    const { submit, editResult } = this.props;
    if (nextProps.submit !== submit) {
      const create = await createMachine(this.state.value);
      if (create) {
        return editResult();
      }
    }
  };
  //Handle submit aciton
  handleSubmit = async (event) => {
    event.preventDefault();

    const createMachines = await createMachine(this.state.value);
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
  //Handle input on change
  handleInput = (event) => {
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
      newSet["id"] = Math.random().toString(36).substr(2, 7);
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

export default NewMachine;
