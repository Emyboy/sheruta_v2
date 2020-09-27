import { Form, Col } from 'react-bootstrap';
import { array } from 'prop-types';
import React from 'react'

const DropdownSelect = ({
    options,
    onChange,
    icon,
    controlId,
    label,
    defaultValue
}) => {
    return (
        <Form.Group as={Col} controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <div className={icon ? "input-with-icon" : null}>
                <select
                    className="form-control"
                    defaultValue={defaultValue}
                    onChange={e => onChange(e)}
                >
                    {
                        options ? options.map((val, i) => {
                            return <option>{val}</option>
                        }) : null
                    }
                </select>
                {
                    icon ? <i className={icon}></i> : null
                }
            </div>
        </Form.Group>
    )
}


DropdownSelect.propTypes = {
    options: array
}

export default DropdownSelect;
