import PropTypes from "prop-types"

function Matching({ pet, clickButton }) {
    return (
        <figure>
            <img src={pet.petImage} alt={pet.petName} />
            <h3>{pet.petName}</h3>
            <h4>{pet.petDescription}</h4>
            <div class="buttons">
                <button id="nextButton" onClick={clickButton}>Next</button>
                <button id="superCroqButton" onClick={clickButton}>Croq</button>
                <button id="likeButton" onClick={clickButton}>heart</button>
            </div>
        </figure>
    );
}

//PropTypes
Matching.propTypes = {
    pet: PropTypes.shape({
        petName: PropTypes.string.isRequired,
        petImage: PropTypes.string.isRequired,
        petDescription: PropTypes.string.isRequired,
    }).isRequired,
};


export default Matching;