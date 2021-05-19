import React, { useState } from 'react'
import { Modal, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleAddPhoneNo } from '../redux/actions/view.actions';
import { updateUserAccount } from '../redux/actions/auth.action';

const mapStateToProps = state => ({
    view: state.view,
    auth: state.auth
});

const mapActionsToProps = {
    toggleAddPhoneNo,
    updateUserAccount
}

export const PhoneNumberModal = connect(
    mapStateToProps,
    mapActionsToProps
)((props) => {
    const [number, setNumber] = useState(null);
    const {
        view
    } = props;

    const handleSubmit = () => {
        if (number !== null) {
            props.updateUserAccount({ phoneno: number, user_id: props.auth });
        }
    }

    return (
        <Modal show={view.showAddNumber} onHide={props.toggleAddPhoneNo}>
            {/* <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.toggleAddPhoneNo}>
                    Close
          </Button>
                <Button variant="primary" onClick={props.toggleAddPhoneNo}>
                    Save Changes
          </Button>
            </Modal.Footer> */}
            <Card>
                <Card.Body>
                    <form>
                        <label style={{ fontSize: '30px' }}>Phone Number</label>
                        <div className="form-group">
                            <div className="input-with-icon">
                                <input onChange={e => setNumber(e.target.value)} type="number" className="form-control" placeholder="Phone Number" />
                                <i className="ti-phone"></i>
                            </div>
                        </div>
                        <Button onClick={handleSubmit}>Add</Button>
                        <Button className='bg-dark ml-3' onClick={props.toggleAddPhoneNo}>Cancel</Button>
                    </form>
                </Card.Body>
            </Card>
        </Modal>
    )
});
