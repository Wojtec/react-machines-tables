import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

//PRICE FILTER COMPONENT

const PriceFilter = (props) => {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");

  //Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { setPrice } = props;

    setPrice(valueOne, valueTwo);
    setValueOne("");
    setValueTwo("");
    return;
  };

  //Handle input on change
  const handleFrom = (event) => {
    if (event.target.name === "From") {
      return setValueOne(event.target.value);
    } else {
      return setValueTwo(event.target.value);
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <p>Filter by price from 32 to 6000</p>
      <FormGroup>
        <Label>
          from:
          <Input
            type="number"
            name="From"
            value={valueOne}
            onChange={(e) => handleFrom(e)}
          ></Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          to:
          <Input
            type="number"
            name="To"
            value={valueTwo}
            onChange={(e) => handleFrom(e)}
          ></Input>
        </Label>
      </FormGroup>
      <Button color="primary" type="submit" name="Show">
        Show
      </Button>
    </Form>
  );
};

export default PriceFilter;
