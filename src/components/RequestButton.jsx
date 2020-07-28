import React from 'react';
import loadingGif from '../img/loading.gif';

export default ({
    loading,
    handleSubmit
}) => {
    return (
        <div className="agent-widget">
            <div className="agent-title">
                {/* <div className="agent-photo"><img src={`image`} alt="" /></div> */}
                <div className="agent-details">
                    <h4>{"Like This ?"}</h4>
                    <span>Send Request</span>
                </div>
                <div className="clearfix"></div>
            </div>
            <button disabled={loading} className="btn btn-theme full-width" onClick={handleSubmit}> {loading ? <img src={loadingGif} alt='' /> : 'Send Request'}</button>
        </div>
    )
}

