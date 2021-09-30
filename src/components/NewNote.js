import "./NewNote.css"
import TodaysDate from "./Date";

export default function NewNote() {
    return (
      <div className="newPostContainer">
        <h3> <TodaysDate/> </h3>
        <h3> How you're feeling emotionally: </h3>
        <h4> How you're feeling physically: </h4>
        <h4> What you're looking forward to: </h4>
        <h4> What you ate today: </h4>
        <h4> What you're looking forward to: </h4>
        
      </div>
    );
  }