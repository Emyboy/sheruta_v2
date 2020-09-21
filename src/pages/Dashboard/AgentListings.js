import React from 'react'
import { connect } from 'react-redux'
import AgentListingCard from '../../components/AgentListingCard'

export const AgentListings = () => {
    return (
        <>
            {/* <div className="form-submit">
                <h4>My Property</h4>
            </div> */}


            <table className="property-table-wrap responsive-table">

                <tbody>
                    <tr>
                        <th><i className="fa fa-file-text"></i> Property</th>
                        <th className="expire-date"><i className="fa fa-calendar"></i> Views</th>
                        <th></th>
                    </tr>

                    <AgentListingCard />
                    <AgentListingCard />
                    <AgentListingCard />
                    <AgentListingCard />
                    <AgentListingCard />

                </tbody>
            </table>



        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AgentListings)
