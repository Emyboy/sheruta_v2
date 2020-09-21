import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SectionHeading from '../../components/SectionHeading'

export const Agents = () => {
    return (
        <div className='container-fluid mt-5 mb-5'>
            
            <SectionHeading 
                heading={'Agent Actions'}

            />

            <div className="row">

                <div className="col-lg-4 col-md-4">
                    <Link to='/agent/new' className="img-wrap">
                        <div className="img-wrap-content visible">
                            <h4>Become An Agent</h4>
                            <span>Upload and Share Properties</span>
                        </div>
                        <div className="img-wrap-background" style={{ backgroundImage: `url(https://reic-ng.com/wp-content/uploads/2017/08/Estate-Agents.jpg)` }}></div>
                    </Link>
                </div>

                <div className="col-lg-4 col-md-4">
                    <a href="http://themezhub.com/" className="img-wrap">
                        <div className="img-wrap-content visible">
                            <h4>View Agents</h4>
                            <span>View List Of Available Agents</span>
                        </div>
                        <div className="img-wrap-background" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg)` }}></div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-4">
                    <a href="http://themezhub.com/" className="img-wrap">
                        <div className="img-wrap-content visible">
                            <h4>Report An Agent</h4>
                            <span>File A Complaint</span>
                        </div>
                        <div className="img-wrap-background" style={{ backgroundImage: `url(https://positivepsychology.com/wp-content/uploads/1_positive-punishment.jpg)` }}></div>
                    </a>
                </div>

            </div>



        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Agents)
