import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';

const mapStateToProps = state => ({
    featured: state.featured
})

export default connect(mapStateToProps)((props) => {
    console.log(props);
    const { isLoading, displayMessage, progress, imageDone } = props.featured
    return (
        <Modal show={isLoading}>
            <Modal.Body style={{textAlign: 'center'}}>
                <img src='https://help.presentations2go.eu/LTI/lib/Spinner.gif' alt='' />
                <h4 className='mt-3'>{displayMessage+`${!imageDone ? progress+'%' : ''}`}</h4>
            </Modal.Body>
        </Modal>
    )
})
