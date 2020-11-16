import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const BrandFilter = (props) => {
  const [brandValue, setBrandValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const { setBrand } = props;
    setBrand(brandValue);
    setBrandValue("");
    return;
  };

  const handleBrandFrom = (event) => {
    return setBrandValue(event.target.value);
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <p>Filter by brand</p>
      <FormGroup>
        <Label className="d-flex align-items-center">
          Brand:
          <Input
            type="string"
            value={brandValue}
            onChange={(e) => handleBrandFrom(e)}
          ></Input>
          <Button className="m-2" color="primary" type="submit">
            Show
          </Button>
        </Label>
      </FormGroup>
    </Form>
  );
};

export default BrandFilter;
