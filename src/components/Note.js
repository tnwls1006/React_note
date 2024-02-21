import { useNavigate } from "react-router-dom";
import "../App.css";
import NoteTitle from "./NoteTitle";

const Note = () => {
  const navigate = useNavigate();

  const onCal = () => {
    navigate("/Calendar");
  };

  const onDiary = () => {
    navigate("/Diary");
  };
  return (
    <div className="Note">
      <NoteTitle />
      <div className="NoteBtn">
        <button onClick={onCal}>Calendar</button>
        <button onClick={onDiary}>Diary</button>
      </div>
    </div>
  );
};

export default Note;
