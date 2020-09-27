import React from 'react';
import { Form, Col } from 'react-bootstrap';


export default ({
    as,
    controlId,
    label,
    type,
    placeholder,
    onChange,
    disabled,
    defaultValue,
    name,
    autoFocus,
    icon,
    required
}) => {
    return (
        <Form.Group as={Col} controlId={controlId}>
            {/* <div className="form-group"> */}
            <Form.Label>{label}</Form.Label>
            <div className={icon ? "input-with-icon" : ""}>
                <input
                    required={required}
                    onChange={e => onChange(e)}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    autoFocus={autoFocus}
                    name={name}
                    type={type}
                    className="form-control"
                    placeholder={placeholder}
                />
                {icon ? <i className={icon}></i> : null}
            </div>
            {/* </div> */}
        </Form.Group>
    )
}


