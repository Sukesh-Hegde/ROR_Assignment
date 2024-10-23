import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = process.env.REACT_APP_BACKEND_URL;

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };







  return (
    <NoteContext.Provider
      value={{        
        alert,
        showAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
