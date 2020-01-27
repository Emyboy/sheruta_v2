import React from 'react';
import { Result } from 'antd';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { toggleDoneModal } from '../redux/actions/user.action';


const mapStateToProps = state =>({
    user: state.user
});

const mapActionsToPros = {
    toggleDoneModal
}

export default connect(mapStateToProps, mapActionsToPros)(({title, subTitle, status, buttonText,toggleDoneModal,user}) => {
    const { showDoneModal } = user;
    return (
        <Modal show={showDoneModal} >
            <Modal.Body>
            <Result
                // className="modal fade show"
                status={status}
                title={title}
                subTitle={subTitle}
                extra={[
                    <button onClick={() => toggleDoneModal(!showDoneModal)} className="btn btn-theme full-width" > {buttonText ? buttonText: 'Ok'}</button>
                ]}
            />

            </Modal.Body>
        </Modal>
    )
})
