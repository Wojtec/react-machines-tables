import React, { useState } from "react";

import "./App.css";
import ListMachines from "./components/listMachines.js";
import Modal from "./components/Modal";

function App() {
  const [machineId, setMachineId] = useState("");
  const [showMachine, setShowMachine] = useState(false);
  const [update, setUpdate] = useState(false);

  const [click, setClick] = useState(false);

  const machineModal = (id) => {
    if (!showMachine) {
      setMachineId(id);
      setShowMachine(!showMachine);
    }

    return setClick(!click);
  };

  const setId = (id) => {
    setMachineId(id);
  };

  const clickModal = () => {
    if (showMachine) {
      setShowMachine(!showMachine);
    }
    return setClick(!click);
  };

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
