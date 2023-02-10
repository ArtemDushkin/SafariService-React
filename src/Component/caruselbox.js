import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sssssImg from '../photo/5.jpg'
import ssssImg from '../photo/4.jpg'
// import sssImg from '../photo/3.jpg'
// import ssImg from '../photo/2.jpg'
// import sImg from '../photo/1.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                {/* <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ sImg }
                        alt='service'
                    />
                    <Carousel.Caption>
                        <h3>Safari service</h3>
                        <p>We are the best ever service for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ ssImg }
                        alt='service'
                    />
                    <Carousel.Caption>
                        <h3>Safari service</h3>
                        <p>We are the best ever service for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ sssImg }
                        alt='service'
                    />
                    <Carousel.Caption>
                        <h3>Safari service</h3>
                        <p>We are the best ever service for you</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ ssssImg }
                        alt='service'
                    />
                    <Carousel.Caption>
                        <h3>Safari service</h3>
                        <p>We are the best ever service for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className='d-block w-100'
                        src={ sssssImg }
                        alt='service'
                    />
                    <Carousel.Caption>
                        <h3>Safari service</h3>
                        <p>We are the best ever service for you</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>

        )
    }
}