import React from 'react'
import { connect } from 'react-redux'

const ShareSignup = (props) => {


    if (!auth.user) {
        return <Redirect to='/login' />
    }
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareSignup)
