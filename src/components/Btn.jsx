import React from 'react';
import { func, bool, string } from 'prop-types';
import { Spinner } from 'react-activity'

const Btn = ({
    text,
    loading,
    className,
    disabled,
    onClick,
    danger,
    type
}) => {
    return (
        <button
            className={`${className || ''} ` + `btn rounded ${danger ? 'btn-danger' : 'btn-theme'}`}
            disabled={loading}
            onClick={onClick}
            type={type}
        >
            {loading ? <Spinner /> : text}
        </button>
    )
}

Btn.propTypes = {
    text: func.isRequired,
    loading: bool,
    className: string,
    disabled: bool,
    onClick: func.isRequired,
    danger: bool,
    type: string
}

export default Btn;
