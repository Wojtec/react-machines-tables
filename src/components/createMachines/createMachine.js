import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

//CREATE MACHINE JSX COMPONENT

const CreateMachineJSX = (props) => {
  const {
    value: { brand, model, manufacturer, price, images },
    handleInput,
    handleSubmit,
  } = props;

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label>
          Brand:
          <Input
            type="string"
            name="brand"
            placeholder="Brand"
            value={brand}
            onChange={(e) => handleInput(e)}
          ></Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Model:
          <Input
            type="string"
            name="model"
            placeholder="Model"
            value={model}
            onChange={(e) => handleInput(e)}
          ></Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Manufacturer:
          <Input
            type="string"
            name="manufacturer"
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(e) => handleInput(e)}
          ></Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>
          Price:
          <Input
            type="string"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => handleInput(e)}
          ></Input>
        </Label>
      </FormGroup>

      {images.map((i, index) => {
        let label;
        if (i.type === "thumbnail") {
          label = "Thumbnail";
        } else {
          label = "Lateral_view";
        }
        return (
          <FormGroup key={index}>
            <Label>
              {label + " url:"}
              <Input
                type="string"
                name={i.type}
                placeholder={label}
                value={i.url}
                onChange={(e) => handleInput(e)}
              ></Input>
            </Label>
          </FormGroup>
        );
      })}
    </Form>
  );
};

export default CreateMachineJSX;
