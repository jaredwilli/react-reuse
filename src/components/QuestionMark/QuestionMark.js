import React from 'react';
import PropTypes from 'prop-types';

/** Question mark component for the atom of a tooltip component */
const QuestionMark = ({ stroke, size }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 19 19"
        >
            <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                <circle cx="8.5" cy="8.5" r="8.5" stroke={stroke} />
                <path fill={stroke} d="M7.299 5.567c.263-.603.99-1.175 1.732-1.175.82 0 1.5.541 1.5 1.283 0 1.64-3.449 2.088-3.449 4.145 0 .556.202 1.051.65 1.546l1.067-.928c-.155-.17-.247-.34-.247-.541C8.552 8.768 12 8.257 12 5.66 12 4.237 10.825 3 9.03 3 7.795 3 6.48 3.773 6 4.948l1.299.619zm-.773 7.485c0 .603.48 1.082 1.082 1.082.603 0 1.083-.48 1.083-1.082 0-.604-.48-1.083-1.083-1.083s-1.082.48-1.082 1.083z" />
            </g>
        </svg>
    );
};

QuestionMark.propTypes = {
    /** The size of the question mark */
    size: PropTypes.number,

    /** The stroke color for the border of each question mark */
    stroke: PropTypes.string
};

QuestionMark.defaultProps = {
    size: 19,
    stroke: '#3566A0'
};

export default QuestionMark;
