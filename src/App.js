import React, { useState } from "react";

import "./App.css";
import ListMachines from "./components/listMachines.js";
import Modal from "./components/Modal/Modal";

function App() {
  const [machineId, setMachineId] = useState("");
  const [showMachine, setShowMachine] = useState(false);
  const [update, setUpdate] = useState(false);

  const [click, setClick] = useState(false);

  //hande id of machine and send to modal
  const machineModal = (id) => {
    if (!showMachine) {
      setMachineId(id);
      setShowMachine(!showMachine);
    }

    return setClick(!click);
  };

  //handle id to buttons on table elements
  const setId = (id) => {
    setMachineId(id);
  };

  //show modal state
  const clickModal = () => {
    if (showMachine) {
      setShowMachine(!showMachine);
    }
    return setClick(!click);
  };

  //handle update content state
  const updateContent = () => {
    return setUpdate(!update);
  };

  return (
    <div className="App">
      <Modal
        click={click}
        machineId={machineId}
        showMachine={showMachine}
        updateContent={updateContent}
      ></Modal>
      <ListMachines
        setId={setId}
        clickModal={clickModal}
        machineModal={machineModal}
        update={update}
      ></ListMachines>
    </div>
  );
}

export default App;
