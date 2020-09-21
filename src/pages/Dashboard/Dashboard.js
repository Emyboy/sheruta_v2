import React from 'react'
import { connect } from 'react-redux'
import { AgentListings } from './AgentListings'
import { ListingForm } from './ListingForm';
import { setDashboardView } from '../../redux/actions/view.actions';

export const Dashboard = (props) => {
    const { view, setView } = props;
    const { currentDashboardView } = view;
    console.log(view);

    const currentPage = () => {
        switch (currentDashboardView) {
            case "listings":
                return <AgentListings />
            case 'listing_form':
                return <ListingForm />
            default:
                return <AgentListings />;
        }
    }


    return (
        <section>
            <div className='container'>
                <div className='row'>


                    <div className="col-lg-4 col-md-12">
                        <div className="dashboard-navbar">

                            <div className="d-user-avater">
                                <img src="assets/img/user-3.jpg" className="img-fluid avater" alt="" />
                                <h4>Company Name</h4>
                                <span>Phone Number</span>
                            </div>

                            <div className="d-navigation">
                                <ul>
                                    <li onClick={() => setView('listings')} className=''>
                                        <a className={`${ currentDashboardView === 'listings' ? 'text-success' : null}`} href="#Listings"><i className="ti-home"></i>My Listings</a>
                                    </li>
                                    <li onClick={() => setView('listing_form')}>
                                        <a className={`${ currentDashboardView === 'listing_form' ? 'text-success' : null}`} href="#Submit"><i className="ti-pencil-alt"></i>Submit New Property</a>
                                    </li>
                                    <hr />
                                    <li onClick={() => setView('listing_form')}>
                                        <a className={`${ currentDashboardView === '' ? 'text-success' : null}`} href="#Submit"><i className="ti-power-off"></i>Log Out</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>



                    <div className='col-lg-8 col-md-12'>
                        <div className='dashboard-wraper p-0'>
                            {currentPage()}
                            {/* <AgentListings /> */}
                            {/* <ListingForm /> */}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    view: state.view
})

const mapDispatchToProps = {
    setView: setDashboardView
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
