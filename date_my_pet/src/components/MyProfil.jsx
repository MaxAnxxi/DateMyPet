import PropTypes from "prop-types";


function MyProfil({img,petname}){
    return (
        <div id="profile">
            <h2>{petname}</h2>
            <img alt={petname} src={img} className="imgProfile"></img>
        </div>
    )
}

MyProfil.propTypes = {
    img : PropTypes.string.isRequired,
    petname : PropTypes.string.isRequired,
}


export default MyProfil;