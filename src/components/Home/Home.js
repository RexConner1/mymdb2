import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './Home.css'

class Home extends Component {
    render() {
        const carouselTiming = 5000;
        
        let poster1 = this.props.media[0].poster_path;
        let poster2 = this.props.media[1].poster_path;
        let poster3 = this.props.media[2].poster_path
        let posterURL = "https://image.tmdb.org/t/p/w780/" ; 

        return (
            <div className="Carousel">
                <Carousel>
                    <Carousel.Item interval={carouselTiming}>
                        <img
                        className="d-block w-100"
                        src={posterURL + poster1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Playing Now</h3>
                        <p>In Theaters Near You</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={carouselTiming}>
                        <img
                        className="d-block w-100"
                        src={posterURL + poster2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Playing Now</h3>
                        <p>In Theaters Near You</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={carouselTiming}>
                        <img
                        className="d-block w-100"
                        src={posterURL + poster3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Playing Now</h3>
                        <p>In Theaters Near You</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home;