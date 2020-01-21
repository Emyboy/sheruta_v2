import React from 'react';
import image from '../img/404.png';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <section className="error-wrap">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">

                        <img src={image} className="img-fluid" alt=""/>
                                <p>Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                                <Link className="btn btn-theme" to="/">Back To Home</Link>
								
							</div>
                        </div>

                    </div>
                </div>
			</section>
    )
}
