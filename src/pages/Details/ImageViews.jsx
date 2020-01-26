import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleLightBox } from '../../redux/actions/view.actions';
import ImageViewer from '../../components/ImageViewer';

const ImageViews = (props) => {
    const { imageurl1, imageurl2, imageurl3, imageurl4 } = props.val;
    return (
        <div class="property3-slide single-advance-property mb-4">
            <ImageViewer imageurl1={imageurl1} imageurl2={imageurl2} imageurl3={imageurl3} imageurl4={imageurl4}/>
            <Carousel>
                <Carousel.Item>
                    <span aria-hidden="true" className="carousel-control-next-icon" />
                    <span id='image-viewer' style={{height: "610px", position: "relative"}}>
                    <Image
                        onClick={() => props.toggleLightBox(props.showLightBox, 0)}
                        fluid
                        className="item-slick  slick-current slick-active"
                        src={imageurl1}
                        alt="Third slide"
                    />

                    </span>
                </Carousel.Item>
                <Carousel.Item>
                    <span id='image-viewer' style={{height: "610px", position: "relative"}}>
                    <Image
                        onClick={() => props.toggleLightBox(props.showLightBox, 1)}
                        fluid
                        className="item-slick  slick-current slick-active"
                        src={imageurl2}
                        alt="Third slide"
                    />
                        

                    </span>
                </Carousel.Item>
                <Carousel.Item>
                    <span id='image-viewer' style={{height: "610px", position: "relative"}}>
                    <Image
                        onClick={() => props.toggleLightBox(props.showLightBox, 2)}
                        fluid
                        className="item-slick  slick-current slick-active"
                        src={imageurl3}
                        alt="Third slide"
                    />

                    </span>
                </Carousel.Item>
                <Carousel.Item>
                    <span id='image-viewer' style={{height: "610px", position: "relative"}}>
                    <Image
                        onClick={() => props.toggleLightBox(props.showLightBox, 3)}
                        fluid
                        className="item-slick  slick-current slick-active"
                        src={imageurl4}
                        alt="Third slide"
                    />

                    </span>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

const mapStateToProps = state => ({
    view: state.view
})

const mapActionToProps = {
    toggleLightBox
}

export default connect(mapStateToProps, mapActionToProps)(ImageViews);
