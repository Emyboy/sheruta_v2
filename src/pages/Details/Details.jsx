import React, { Component } from 'react'
import DetailHeading from './DetailHeading'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight';
import Pageloader from '../../components/PageLoader';

import { connect } from 'react-redux';
import { getApartmentById } from '../../redux/actions/apartment.actions';
import { getSharedById } from '../../redux/actions/shared.actions';

class Details extends Component {
    componentDidMount() {
        const { type, id } = this.props.match.params;
        switch (type) {
            case "apartment":
                this.props.getApartmentById(id)
                break;
            case "shared":
                this.props.getSharedById(id);
                break;
            default:
                break;
        }
    }
    render() {
        const { type } = this.props.match.params;
        const { sharedLoading, shared } = this.props.shared;
        const { getApartmentLoading, apartments } = this.props.apartment;
        if (type === "apartment" ? getApartmentLoading: sharedLoading) {
            return (<Pageloader />)
        } else {
            return (
                <section>
                    <DetailHeading val={ type === "apartment" ? apartments : shared} />
                    <div className="gray">
                        <div className="container">
                            <div className="row">
                                <DetailLeft val={type === "apartment" ? apartments : shared} />
                                <DetailRight />
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

const mapStateToProps = state => ({
    shared: state.shared,
    apartment: state.apartment
})

const mapActionsToProps = {
    getApartmentById,
    getSharedById
}

export default connect(mapStateToProps, mapActionsToProps)(Details);
