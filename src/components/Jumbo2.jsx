import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { notification } from 'antd'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
        return (
            <section className="image-cover" style={{background: `url(assets/img/bg-1.jpg) no-repeat`}} data-overlay="6">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-9 col-md-10">
    
                            <div className="sec-heading center light">
                                <h2>SHARE A SPACE WITH SOMEONE</h2>
                                <p>Here at Sheruta we provide space for sharing.</p>
                                {
                                    props.auth.isLoggedIn ? 
                                        <Link to={"/shared/signup"} className="btn btn-theme-2 mt-3">Get Started</Link>
                                            :
                                        <button className="btn btn-theme-2 mt-3" onClick={() => notification.warning({message: 'Please Login'})}>Get Started</button>
                                }
                            </div>
    
                        </div>
                    </div>
                </div>
            </section>
        )
})
