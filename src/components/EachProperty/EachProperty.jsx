import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const EachProperty = ({ data }) => {
    const formatedPrice = new Intl.NumberFormat('en-NG');
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="property-listing property-2">

                <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                        <div className="click">
                            <div><Link to={{
                                pathname: `/property/${data.name}/${data.id}`,
                                state: data
                            }}><img src={data.image_urls[0]} className="img-fluid mx-auto" alt="" /></Link></div>
                            {/* <div><a href="single-property-1.html"><img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" /></a></div>
                            <div><a href="single-property-1.html"><img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" /></a></div> */}
                        </div>
                    </div>
                    {
                        data.statu ?
                            <span className="property-type bg-dark shadow">{data.statu.name}</span> : null
                    }
                </div>

                <div className="listing-detail-wrapper pb-0">
                    <div className="listing-short-detail">
                        <Link to={{
                            pathname: `/property/${data.name}/${data.id}`,
                            state: data
                        }}>
                            <h2 className="listing-name">
                                {data.name.length > 35 ? data.name.slice(0, 35) + "..." : data.name}
                            </h2>
                        </Link>
                        {
                            data.verified ?
                                <i className="list-status ti-check"></i> : null

                        }
                    </div>
                </div>

                <div className="price-features-wrapper">
                    <div className="listing-price-fx">
                        <h6 className="listing-card-info-price price-prefix">{formatedPrice.format(data.price)}<span className="price-suffix">{data.payment_type ? `/${data.payment_type.abbreviation}` : null}</span></h6>
                    </div>
                    <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                            <span className="inc-fleat inc-bed">{data.bedroom} Beds</span>
                        </div>
                        <div className="listing-card-info-icon">
                            <span className="inc-fleat inc-bath">{data.bathroom} Bath</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(EachProperty)
