import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router';
import SelectionCard from '../../components/SelectionCard/SelectionCard';

export const Share = (props) => {
    localStorage.setItem('after_login', '/share')
    const { auth } = props;

    
    return (
        <div className='container bg-white pt-5 pb-5 mt-4 mb-5 rounded shadow border'>
            <div className='text-center'>
                <h2><b className='text-muted'>How can we help?</b></h2>
            </div>
            <hr />
            <div className='row justify-content-center'>
                <SelectionCard
                    className='border-success' 
                    heading="I have an apartment for share"
                />
                <SelectionCard
                    className='border-success' 
                    heading="I'm looking for an apartment to share"
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Share)
