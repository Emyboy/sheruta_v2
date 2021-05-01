import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Squares } from 'react-activity';
import { Modal } from 'react-bootstrap';

const PersonalInfoPopup = ({
    show,
    val,
    handleClose
}) => {

    const [state, setstate] = useState({
        display: 'agent'
    })

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className='pb-0'>
                    <div className='text-center'>
                        <img style={{ width: '140px' }} src={val.logo_url} alt={val.company_name + ' logo'} />
                        <div className="agency-name mt-3">
                            <h4><div to={`/agent/${val.name}`}>{val.name}</div></h4>
                            <span><i className="lni-map-marker"></i>{val.location}</span>
                        </div>
                    </div>
                </Modal.Body>
                {
                    state.display === 'loading' ? <div className='m-3 text-center'>
                        <Squares color='#00ba74' />
                    </div> : null
                }
                {
                    state.display === 'agent' ? <div className='agency agency-list shadow-0 p-0'>
                        <div className="agency-content p-4  ">
                            <div className="block-header">
                                <h4 className="block-title">Agent Info</h4>
                            </div>
                            <ul className="agency-detail-info">
                                <li><i className="lni-phone-handset"></i>(123) 123-456</li>
                                <li><i className="lni-envelope"></i><a href="#">contact@example.com</a></li>
                            </ul>

                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="lni-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="lni-twitter"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="lni-instagram"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="lni-linkedin"></i></a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div> : null
                }
                {
                    state.display === 'info' ? <div className="block-wrap p-3">

                        <div className="block-header">
                            <h4 className="block-title">Personal Info</h4>
                        </div>

                        <div className="block-body">
                            <ul className="dw-proprty-info">
                                <li><strong>Ceo</strong>Mr. Adam Vilawo</li>
                                <li><strong>Email</strong>Isvali@gmail.com</li>
                                <li><strong>Phone</strong>+91 235 658 4758</li>
                                <li><strong>Skype</strong>isva24lia</li>
                                <li><strong>Address</strong>320, Near Iswar</li>
                                <li><strong>City</strong>New York</li>
                                <li><strong>Country</strong>United State</li>
                                <li><strong>Stab.</strong>2007</li>
                            </ul>
                        </div>

                    </div> : null
                }

                <button className='btn btn-success' onClick={handleClose}>Close</button>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoPopup)
