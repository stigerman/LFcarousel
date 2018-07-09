import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Arrow = ({ direction, clickFunction, glyph }) => ( <
    button className = { `slide-arrow ${direction}` }
    onClick = { clickFunction } >


    <
    FontAwesomeIcon icon = { glyph }
    color = "white"
    size = "2x" /
    >
    <
    /
    button >
);



Arrow.propTypes = {
    direction: PropTypes.string.isRequired,
    clickFunction: PropTypes.func.isRequired,
    glyph: PropTypes.shape({}).isRequired
};
export default Arrow;