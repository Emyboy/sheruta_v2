import React, { Component } from 'react'
import DetailHeading from './DetailHeading'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight';
import Pageloader from '../../components/PageLoader';

import { connect } from 'react-redux';
import { getApartmentById } from '../../redux/actions/apartment.actions';
import { getSharedById } from '../../redux/actions/shared.actions';
import { MetaTags } from 'react-meta-tags';

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
        if (type === 'apartment') {
            if (this.props.view.detailLoading) {
                return (<Pageloader />)
            } else {
                return (
                    <section>
                        <MetaTags>
                            <title>{`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`}</title>
                            <meta name="description" content={type === "apartment" ? apartments.bio : shared.bio} />
                            <meta property="og:title" content={`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`} />
                            <meta name="keyword" content={`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`} />
                        </MetaTags>
                        <DetailHeading val={type === "apartment" ? apartments : shared} />
                        <div className="gray">
                            <div className="container">
                                <div className="row">
                                    <DetailLeft val={type === "apartment" ? apartments : shared} />
                                    <DetailRight val={type === "apartment" ? apartments : shared} />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        }else {
            if (this.props.view.detailLoading) {
                return (<Pageloader />)
            } else {
                return (
                    <section>
                        <DetailHeading val={type === "apartment" ? apartments : shared} />
                        <div className="gray">
                            <div className="container">
                                <div className="row">
                                    <DetailLeft val={type === "apartment" ? apartments : shared} />
                                    <DetailRight val={type === "apartment" ? apartments : shared} />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        }
            
    }
}

const mapStateToProps = state => ({
    shared: state.shared,
    apartment: state.apartment,
    view: state.view
})

const mapActionsToProps = {
    getApartmentById,
    getSharedById
}

export default connect(mapStateToProps, mapActionsToProps)(Details);
