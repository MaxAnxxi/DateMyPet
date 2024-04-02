import PropTypes from 'prop-types'


function Likes({ matchcount }) {
    return (
        <div>
            <div id="Like">
                <button alt="Likes">Likes</button>
                <p id="numberLikes">99</p>
            </div>
            <div id="Match">
                <button alt="Matches">Matches</button>
                <p id="numberMatch">{matchcount}</p>
            </div>
        </div>
    )
}

Likes.propTypes = { 
    matchcount: PropTypes.number.isRequired,
}
export default Likes;