import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, ButtonGroup, Button } from 'react-bootstrap'
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { deleteApartment } from '../redux/actions/agent.actions';

export const AgentListingCard = (props) => {
    const { data } = props;
    const [showDelete, setShowDelete] = useState(false);
    console.log('CARD DATA ---', data);

    return (
        <tr id={`${data.uuid}`}>
            <Modal show={showDelete} onHide={() => setShowDelete(!showDelete)} >
                <Modal.Body>
                    <div className='text-center'>
                        <h3>Are you sure you want to delete?</h3>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="success" onClick={() => {
                                props.DeleteApartment(data);
                                setShowDelete(!showDelete)
                            }}>Yes</Button>
                            <Button variant="danger" onClick={() => setShowDelete(!showDelete)}>No</Button>
                        </ButtonGroup>
                    </div>
                </Modal.Body>
            </Modal>
            <td className="property-container">
                <img src={data.image_urls.image_url_4} alt={`${data.title}`} />
                <div className="title">
                    <h4><Link to={{
                        pathname: `/property/${data.id}/${data.agent_id}`,
                        query: data
                    }} params={data}>{data.title}</Link></h4>
                    <span>{data.location}</span>
                    <span className="table-property-price">₦ {data.price}</span>
                </div>
            </td>
            <td className="expire-date">{data.moment}</td>x
            <td className="action">
                <a href="#c" className='text-warning'><i className="ti-pencil"></i> Edit</a>
                <a href="#c" className='text-success'><i className="ti-arrow-up"></i> Promote</a>
                <a href="#c" onClick={() => setShowDelete(!showDelete)} className="delete text-danger"><i className="ti-close"></i> Delete</a>
            </td>
        </tr>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    DeleteApartment: deleteApartment
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentListingCard)
