import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  // Changes value of square on click.
  const onTileClick = () => {
    const updatedSquare = {
      id: props.id,
      value: 'x',
    };

    props.onClickCallback(updatedSquare);
  };

  return (
    <button
      className="square"
      onClick={onTileClick}
    >
      {props.value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
