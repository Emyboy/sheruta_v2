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
        <div className="image-cover hero-banner" style={{ background: `url(${formatAMPM(new Date()) === 'am' ? "https://cdn.dribbble.com/users/149082/screenshots/2331083/city-scroll.gif" : "https://i.giphy.com/media/plyXlAk5JjZeg/source.gif"}) no-repeat` }} data-overlay="6">
            <SearchBox />
        </div >
    )
}
