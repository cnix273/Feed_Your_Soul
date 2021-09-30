import "./NewNote.css"
import TodaysDate from "./Date";

export default function NewNote() {
    return (
      <div className="newPostContainer">
        <h3 id="date"> <TodaysDate/> </h3>
        <form>
          <label>
            <h4> How you're feeling emotionally: </h4>
            <select id="emotionalState" name="emotionalState">
              <option value="happy">Happy</option>
              <option value="excited">Excited</option>
              <option value="proud">Proud</option>
              <option value="thankful">Thankful</option>
              <option value="sad">Sad</option>
              <option value="nervous">Nervous</option>
              <option value="surprised">Surprised</option>
              <option value="scared">Scared</option>
              <option value="angry">Angry</option>
              <option value="annoyed">Annoyed</option>
              <option value="hurt">Hurt</option>
              <option value="hopeful">Hopeful</option>
              <option value="intrigued">Intrigued</option>
              <option value="inspired">Inspired</option>
              <option value="">Affectionate</option>
            </select>
          </label>
          <br/>
          <label>
            <h4> How you're feeling physically: </h4>
            <select id="physicalState" name="physicallState">
              <option value="energetic">Energetic</option>
              <option value="rested">Rested</option>
              <option value="tired">Tired</option>
              <option value="lethargic">Lethargic</option>
              <option value="goofy">Goofy</option>
              <option value="playful">Goofy</option>
            </select>
          </label>
          <label>
            <h4> What you're looking forward to: </h4>
            <input type="text" name="emotionalState" />
          </label>
          <label>
            <h4> What you ate today: </h4>
            <input type="text" name="emotionalState" />
          </label>
        </form>
      </div>
    );
  }