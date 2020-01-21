import React, { Component } from 'react'
import DetailHeading from './DetailHeading'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight';
import ImageViewer from './ImageViews';

export default class Details extends Component {
    render() {
        return (
            <section>
                            <ImageViewer />
                <DetailHeading />
                <div className="gray">
                    <div className="container">
                        <div className="row">
                            <DetailLeft />
                            <DetailRight />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
