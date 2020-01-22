import React from 'react';

export default () => {
    return (
        <div id="preloader" style={{ display: 'visible'}}>
            <div class="preloader center">
                <div style={{textAlign: 'center'}}>
                    <img width="130%" src='https://www.distinctivefeatures.com.au/wp-content/themes/distinctive/images/loader.gif' alt='loading-gif' />
                   <label>Loading....</label>
                </div>
                {/* <span>
                </span>
                <span>
                </span> */}
            </div>
        </div>
    )
}
