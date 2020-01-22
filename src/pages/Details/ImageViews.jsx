import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default (props) => {
    console.log(props.val)
    const { imageurl1, imageurl2, imageurl3, imageurl4 } = props.val;
    return (
        <div class="property3-slide single-advance-property mb-4">

            <Carousel>
                <Carousel.Item>
                    <span aria-hidden="true" className="carousel-control-next-icon" />
                    <span id='image-viewer' style={{height: "610px", position: "relative"}}>
                    <Image
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
