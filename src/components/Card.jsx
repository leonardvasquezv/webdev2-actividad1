
import PropTypes from 'prop-types';

const Card = ({ dataCard, contador = 1 }) => {
  const { url, titulo, descripcion } = dataCard;
  return (
    <div className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={url} alt="Card image cap" />
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{titulo}</h5>
            <h5 className="card-title">{contador}</h5>
          </div>
          <p className="card-text">
            {descripcion}
          </p>
          <a href="#" className="btn btn-primary">
            Detalles
          </a>
        </div>
      </div>
    </div>
    );
};

Card.propTypes = {
  dataCard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }).isRequired,
  contador: PropTypes.number.isRequired,
};

export default Card;
