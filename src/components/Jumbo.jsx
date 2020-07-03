import React from 'react';
import SearchBox from './SearchBox';

function formatAMPM(date) {
    var hours = date.getHours();
    // var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // var strTime = hours + ':' + minutes + ' ' + ampm;
    return ampm;
}

export default () => {
    return (
        <div className="image-cover hero-banner" style={{ background: `url("https://www.bidhaar.com/wp-content/uploads/2019/08/Eva-Sonaike-scaled.jpg") no-repeat` }} data-overlay="6">
            <SearchBox />
        </div >
    )
}
