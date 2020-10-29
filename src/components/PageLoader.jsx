import React from 'react';
import Icon from '../img/site-icon.png';
import { Spinner } from 'react-activity';

export default () => {
    return (
        // <div id="preloader" style={{ display: 'visible'}}>
        //     <div className="preloader center" style={{ width: '90px' }}>
        //         <div style={{textAlign: 'center'}}>
        //             <img src={Icon} alt='loading-gif' /><br />
        //            {/* <label style={{fontSize: '200%'}}>Loading....</label> */}
        //             <div className="mt-3">
        //                 <Spinner color={'green'} />
        //             </div>
        //         </div>
        //         {/* <span>
        //         </span>
        //         <span>
        //         </span> */}
        //     </div>
        // </div>
        <div id="preloader" >
            <div style={{
                // position: 'absolute',
                // top: '40%',
                // left: '40vw'
                marginTop: '30%'
            }}>
                <div className="text-center">
                    <img style={{ width: '150px' }} src={Icon} alt='loading-gif' /><br />
                    <div className="mt-3">
                        <Spinner size={10} color={'green'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
