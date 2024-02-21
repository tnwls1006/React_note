import { BsHouse } from "react-icons/bs";
import "../App.css";

const NoteTitle = ({ onClick }) => {
  return (
    <div className="noteTitle">
      <h2>Note Title</h2>
      <BsHouse size="4vh" className="Main" onClick={onClick} />
    </div>
  );
};

export default NoteTitle;
