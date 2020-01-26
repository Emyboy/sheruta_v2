import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { connect } from 'react-redux';
import { toggleLightBox } from '../redux/actions/view.actions';

class ImageViewer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            photoIndex: 0,
        };
    }

    render() {
        const { imageurl1, imageurl2, imageurl3, imageurl4 } = this.props;
        const images = [
            imageurl1,
            imageurl2,
            imageurl3,
            imageurl4
        ];
        const { imageViewerIndex } = this.props.view;

        return (
            <div>
                {this.props.view.showLightBox && (
                    <Lightbox
                        mainSrc={images[imageViewerIndex]}
                        // nextSrc={images[(imageViewerIndex + 1) % images.length]}
                        // prevSrc={images[(imageViewerIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.props.toggleLightBox(this.props.view.showLightBox)}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (imageViewerIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (imageViewerIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    view: state.view
})

const mapActionsToProps = {
    toggleLightBox
}

export default connect(mapStateToProps, mapActionsToProps)(ImageViewer);
