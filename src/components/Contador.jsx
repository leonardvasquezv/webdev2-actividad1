
import PropTypes from 'prop-types';

const Contador = ({ contador, setContador }) => {
    return (
      <div className="container">
        <h2 className="text-center my-4">Contador</h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mx-2" onClick={ () => setContador(contador + 1) }>
            Incrementar
          </button>
          <button className="btn btn-danger mx-2" onClick={ () => setContador(contador - 1) }>
            Decrementar
          </button>
          <button className="btn btn-secondary mx-2" onClick={ () => setContador(0)}>
            Reiniciar
          </button>
        </div>
        <p className="text-center mt-4">Valor actual: {contador}</p>
      </div>
    );
}

Contador.propTypes = {
  contador: PropTypes.number.isRequired,
  setContador: PropTypes.func.isRequired,
};

export default Contador