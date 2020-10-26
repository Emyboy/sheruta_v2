import React from 'react'
import { connect } from 'react-redux'

export const AgentListingCard = (props) => {
    const { data } = props;
    return (
        <tr>
            <td className="property-container">
                <img src={data.image_urls.image_url_4} alt={`${data.title}`} />
                <div className="title">
                    <h4><a href="#c">{data.title}</a></h4>
                    <span>{data.location}</span>
                    <span className="table-property-price">₦ {data.price}</span>
                </div>
            </td>
            <td className="expire-date">{data.moment}</td>
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
