import React, { useState, useEffect } from "react";
import CreateMachine from "../createMachines";
import CardMachine from "./cardMachine";
import EditMachine from "../editMachine";

//MODAL WINDOW COMPONENT

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalWindow = (props) => {
  const { click, machineId, showMachine, updateContent } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [edit, setEdit] = useState(false);

  //open nested modal
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  //close modals
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  //open modal
  const toggle = () => setModal(!modal);

  //submit machine for create button
  const submitMachine = () => {
    return setSubmit(!submit);
  };

  //edit machine for change state
  const editMachine = () => {
    return setEdit(!edit);
  };

  //edit results for update content of table
  const editResult = () => {
    return updateContent();
  };

  //use effect for click button
  useEffect(() => {
    return toggle;
  }, [click]);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className=" justify-content-center">
        <ModalHeader toggle={toggle}>Create new Machine</ModalHeader>
        <ModalBody className=" d-flex justify-content-center">
          {showMachine ? (
            <CardMachine id={machineId}></CardMachine>
          ) : (
            <CreateMachine
              editResult={editResult}
              submit={submit}
            ></CreateMachine>
          )}
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Edit Machine</ModalHeader>
            <ModalBody>
              <EditMachine
                id={machineId}
                edit={edit}
                editResult={editResult}
              ></EditMachine>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  editMachine();
                  toggleAll();
                }}
              >
                Edit
              </Button>{" "}
              <Button color="secondary" onClick={toggleNested}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>

        <ModalFooter>
          {showMachine ? (
            <Button
              color="primary"
              type="submit"
              onClick={() => {
                toggleNested();
              }}
            >
              Edit
            </Button>
          ) : (
            <Button
              color="primary"
              type="submit"
              onClick={() => {
                toggle();
                submitMachine();
              }}
            >
              Add
            </Button>
          )}

          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalWindow;
