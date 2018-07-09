import React from 'react';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'
import ImageSlide from './components/ImageSlide';
import Arrow from './components/Arrow';
import Gallery from './components/Gallery'

const imgUrls = [{
        "id": 1,
        "title": "Image1",
        "sentence": "Amazing placeholder",
        "url": "https://picsum.photos/400/600?image=8"

    },
    {
        "id": 2,
        "title": "Image2",
        "sentence": "Slightly Amazing",
        "url": "https://picsum.photos/400/600?image=1"
    },
    {
        "id": 3,
        "title": "Image3",
        "sentence": "Nearly Amazing",
        "url": "https://picsum.photos/400/600?image=2"
    },
    {
        "id": 4,
        "title": "Image4",
        "sentence": "Not Amazing",
        "url": "https://picsum.photos/400/600?image=3"
    }
];

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            count: 10
        };


        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.gallerySelection = this.gallerySelection.bind(this);

    }

    componentDidMount() {
        this.startTimer()
    }

    tick() {
        this.setState({ count: (this.state.count - 1) })
        if (this.state.count < 1) {
            this.nextSlide()
        }

    }

    startTimer() {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)

    }

    stopTimer() {
        clearInterval(this.timer)
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
        this.startTimer();
        this.setState({
            currentImageIndex: index,
            count: 10
        });
    }

    gallerySelection(image, index) {
        this.setState({
            currentImageIndex: index,
            count: 10
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        this.startTimer();
        this.setState({
            currentImageIndex: index,
            count: 10
        });


    }

    render() {
        return ( <
            div >
            <
            div className = "timer" >
            <
            h2 > The next slide will appear in: { this.state.count } <
            span > seconds < /span>  < /
            h2 >

            <
            /div>

            <
            div onMouseEnter = { this.stopTimer }
            onMouseLeave = { this.startTimer } >

            <
            Arrow direction = "left"
            clickFunction = { this.previousSlide }
            glyph = { faAngleDoubleLeft }
            / >

            <
            ImageSlide className = "ui-header"
            url = { imgUrls[this.state.currentImageIndex] }
            />  

            <
            Arrow direction = "right"
            clickFunction = { this.nextSlide }
            glyph = { faAngleDoubleRight }
            / >


            <
            /div>


            <
            Gallery gallerySelection = { this.gallerySelection }
            images = { imgUrls }
            index = { this.state.currentImageIndex }
            / >






            <
            /div>
        );
    }
}


export default Carousel;