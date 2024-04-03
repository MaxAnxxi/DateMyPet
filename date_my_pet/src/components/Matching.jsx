import PropTypes from "prop-types";
import cancel_circle from "../assets/close.png"
import paw1 from "../assets/paw(1).png"
import heart from "../assets/heart(1).png"


function Matching({ pet, clickButton , match , actualMatch }) {
  function superCroq(){
      clickButton();
      match(actualMatch+1);
  }
  return (
    <figure className="petCard">
      <img className="customizeImg" src={pet.petImage} alt={pet.petName} />
      <h4 id="petName">{pet.petName}</h4>
      <div className="infoPetCard">
        <h4 id="petRace">{pet.petRace}</h4>
        <h4 id="petAge">{pet.petAge}</h4>
        <h4>
          {pet.petLoof === "yes" ? (
              <strong>LOOF</strong>
          ) : 
          <p></p>
          }
        </h4>
      </div>

      <p>{pet.petDescription}</p>

      <div classNameName="buttons">
        <button id="nextButton" alt="next" onClick={clickButton}><img src={cancel_circle} /></button>
        <button id="superCroqButton" onClick={superCroq}><img src={paw1} /></button>
        <button id="likeButton" onClick={clickButton}><img src={heart} /></button>
      </div>
    </figure>
  );
}

//PropTypes
Matching.propTypes = {
  pet: PropTypes.shape({
    petImage: PropTypes.string.isRequired,
    petName: PropTypes.string.isRequired,
    petRace: PropTypes.string.isRequired,
    petAge: PropTypes.string.isRequired,
    petLoof: PropTypes.string,
    petDescription: PropTypes.string.isRequired,
  }).isRequired,
  clickButton: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
  actualMatch : PropTypes.number.isRequired,
};

export default Matching;
