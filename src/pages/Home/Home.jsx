import React, { Component } from 'react'
import Jumbo from '../../components/Jumbo'
import WhatWeDo from '../../components/WhatWeDo'
import Jumbo2 from '../../components/Jumbo2'
import RecentApartments from '../../components/RecentApartments'
import RecentShared from '../../components/RecentShared'
import { connect } from 'react-redux'
import PageLoader from '../../components/PageLoader';
import { getRecentApartments } from '../../redux/actions/apartment.actions';
import { getRecentSharedApartments } from '../../redux/actions/shared.actions';


const mapStateToProps = state => ({
    apartment: state.apartment,
    shared: state.shared
});

const mapActionsToProps = {
    getRecentSharedApartments,
    getRecentApartments
}
export default connect(mapStateToProps, mapActionsToProps)(class Home extends Component {
    componentWillMount() {
        this.props.getRecentApartments(6);
        this.props.getRecentSharedApartments(6);
    }
    render() {
        const { apartment, shared } = this.props;
        const { getApartmentLoading } = apartment;
        const { sharedLoading } = shared;
        if(getApartmentLoading, sharedLoading){
            return <PageLoader />
        }else {
            return (
                <div>
                    <Jumbo />
                    <RecentShared shared={shared} />
                    <Jumbo2 />
                    <RecentApartments apartment={apartment} />
                    <WhatWeDo />
                </div>
            )
        }
    }
})
