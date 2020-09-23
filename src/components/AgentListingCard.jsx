import React from 'react'
import { connect } from 'react-redux'

export const AgentListingCard = (props) => {
    const { val } = props;
    return (
        <tr>
            <td className="property-container">
                <img src="https://firebasestorage.googleapis.com/v0/b/sheruta-try.appspot.com/o/agent%2F1%2Fcompany_logo?alt=media&token=307534ae-bd2b-4545-9b64-5f141143ea6b" alt="" />
                <div className="title">
                    <h4><a href="#c">Oak Tree Villas</a></h4>
                    <span>71 Lower River Dr. Bronx, NY</span>
                    <span className="table-property-price">₦ 535,000</span>
                </div>
            </td>
            <td className="expire-date">December 12, 2016</td>
            <td className="action">
                <a href="#c" className='text-warning'><i className="ti-pencil"></i> Edit</a>
                <a href="#c" className='text-success'><i className="ti-arrow-up"></i> Promote</a>
                <a href="#c" className="delete text-danger"><i className="ti-close"></i> Delete</a>
            </td>
        </tr>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentListingCard)
