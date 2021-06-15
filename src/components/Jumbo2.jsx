import React from 'react'
import { Link } from 'react-router-dom'
import { notification } from 'antd'
import { connect } from 'react-redux';
import Btn from './Btn';

import image from '../img/shared-apartment.jpg';

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
    return (
        <section className="image-cover" style={{ background: `url(${image}) no-repeat` }} data-overlay="6">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-lg-9 col-md-10">

                        <div className="sec-heading center light">
                            <h2>SHARE A SPACE WITH SOMEONE</h2>
                            <p>Here at Sheruta we provide space for sharing.</p>
                            <Link to={"/share"} >
                                <Btn
                                    text='Get Started'
                                    style={{ }}
                                 />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
})
