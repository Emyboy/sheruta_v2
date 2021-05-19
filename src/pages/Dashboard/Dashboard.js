import React, { useState } from 'react'
import { connect } from 'react-redux'
import AgentListings from './AgentListings'
import ListingForm from './ListingForm';
import { setDashboardView } from '../../redux/actions/view.actions';
import { Redirect } from 'react-router';
import EditAgentModal from '../Agents/EditAgentModal';
import ProfileRight from '../Profile/ProfileRight'
import Profile from '../Profile/Profile'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Drawer } from 'antd'

export const Dashboard = (props) => {
    const [show, setShow] = useState(false);
    const { view, setView, auth } = props;
    const { currentDashboardView } = view;
    const [showDrawer, setShowDrawer] = useState(false);

    const currentPage = () => {
        switch (currentDashboardView) {
            case "listings":
                return <AgentListings />
            case 'listing_form':
                return <ListingForm />
            case 'profile':
                return <Profile val={props.auth.user}/>
            default:
                return <Profile val={props.auth.user} />;
        }
    }

    const toggleEdit = () => {
        setShow(!show);
    }

    const navigate = (route) => {
        setView(route)
        setShowDrawer(!showDrawer)
    }


    if (!auth.agentData) {
        return <Redirect to='/agent/new' />
    } else {
        return (
            <>
                <section className='pt-0'>
                    <nav className="shadow-sm mb-3 navbar navbar-expand-lg navbar-light bg-white">
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                        <i className="ti-menu mr-5 link" onClick={() => setShowDrawer(!showDrawer)}></i>
                        <span className="navbar-brand" href="c#">{auth.agentData.company_name + "'s Dashboard"}</span>
                    </nav>

                    <Drawer
                        // title="Basic Drawer"
                        placement={'left'}
                        closable={false}
                        onClose={() => setShowDrawer(!showDrawer)}
                        visible={showDrawer}
                    // key={placement}
                    >
                        <div className="d-user-avater mt-0">
                            <img style={{ width: '100px' }} src={auth.agentData.company_logo} className="img-fluid avater" alt={auth.agentData.company_name} />
                            <h4>{auth.agentData.company_name}</h4>
                            {/* <span>{auth.agentData.company_phone_no}</span><br /> */}

                            {/* <ButtonGroup aria-label="Profile Actions" className='mt-2'>
                            <Button className='p-2' onClick={toggleEdit} variant="warning">Edit</Button>
                            <Button className='p-2' variant="success">Share</Button>
                        </ButtonGroup> */}

                        </div>
                        <hr />
                        <div className="d-navigation">
                            <ul>
                                <li><a onClick={() => navigate('profile')} className={currentDashboardView === 'profile' ? 'text-success': null} href="#profile"><i className="ti-user"></i>My Profile</a></li>
                                <li><a onClick={() => navigate('listings')} className={currentDashboardView === 'listings' ? 'text-success': null} href="#properties"><i className="ti-layers"></i>My Properties</a></li>
                                <li><a onClick={() => navigate('listing_form')} className={currentDashboardView === 'listing_form' ? 'text-success': null} href="#submit"><i className="ti-pencil-alt"></i>Submit New Property</a></li>
                                <li><a className={currentDashboardView === '' ? 'text-success': null} href="#"><i className="ti-power-off"></i>Log Out</a></li>
                            </ul>
                        </div>
                    </Drawer>

                    <div className='container-fluid'>
                        <div className='row'>

                            <EditAgentModal
                                show={show}
                                handleClose={() => setShow(!show)}
                                data={auth.agentData}
                            />

                            {/* <div className="col-lg-3 col-md-12">
                            <div className="dashboard-navbar bg-white">

                                <div className="d-user-avater">
                                    <img src={auth.agentData.company_logo} className="img-fluid avater" alt={auth.agentData.company_name} />
                                    <h4>{auth.agentData.company_name}</h4>
                                    <span>{auth.agentData.company_phone_no}</span><br />

                                    <ButtonGroup aria-label="Profile Actions" className='mt-2'>
                                        <Button className='p-2' onClick={toggleEdit} variant="warning">Edit</Button>
                                        <Button className='p-2' variant="success">Share</Button>
                                    </ButtonGroup>

                                </div>

                                <div className="d-navigation">
                                    <ul>
                                        <li onClick={() => navigate('listings')} className=''>
                                            <a className={`${currentDashboardView === 'listings' ? 'text-success' : null}`} href="#Listings"><i className="ti-home"></i>My Listings</a>
                                        </li>
                                        <li onClick={() => navigate('listing_form')}>
                                            <a className={`${currentDashboardView === 'listing_form' ? 'text-success' : null}`} href="#Submit"><i className="ti-pencil-alt"></i>Submit New Property</a>
                                        </li>
                                        <hr />
                                        <li onClick={() => navigate('listing_form')}>
                                            <a className={`${currentDashboardView === '' ? 'text-success' : null}`} href="#Submit"><i className="ti-power-off"></i>Log Out</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div> */}



                            <div className='col-lg-12 col-md-12'>
                                <div className='dashboard-wraper p-0'>
                                    {currentPage()}
                                    {/* <AgentListings /> */}
                                    {/* <ListingForm /> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    view: state.view,
    agent: state.agent
});

const mapDispatchToProps = {
    setView: setDashboardView
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
