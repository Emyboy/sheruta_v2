import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EachProperty from '../../components/EachProperty/EachProperty';
import HorizontalProductCard from '../../components/HorizontalProductCard';
import Sticky from 'react-sticky-el';

const All = (props) => {

    const [state, setState] = useState({
        properties: []
    });

    const getProperties = () => {
        axios(process.env.REACT_APP_BASE_URL + '/properties/recent/' + "6")
            .then(res => {
                setState({ ...state, properties: res.data })
            })
            .catch(err => {
            })
    }
    useEffect(() => {
        getProperties()
    }, []);
    return (
        <div>
            {/* <Sticky stickyStyle={{ zIndex: 100 }}>
                <nav className="shadow p-2 bg-white" >
                    <h4>Hi there</h4>
                </nav>
            </Sticky> */}

            <section>
                {

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 list-layout">
                                <div className="row">
                                    {
                                        state.properties.map((data, i) => {
                                            console.log('data, DATA', data)
                                            return <HorizontalProductCard val={data} key={i} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                }
            </section>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(All)
