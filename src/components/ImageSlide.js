import React from 'react';
import PropTypes from 'prop-types';

class ImageSlide extends React.Component {

    constructor(props) {
        super(props);
        const url = { url: props.url }
        this.state = {
            showingImage: null,
            image: url
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.image.url !== nextProps.url.url) {
            this.setState({
                image: nextProps.url
            })
        }
    }

    onShowImage = () => {

        this.setState({
            showingImage: this.state.image.url,
        });
        setTimeout(() => {
            this.setState({
                showingImage: null,
            });
        }, 3 * 1000);
    }

    render() {

        const styles = {
            backgroundImage: `url(${this.state.image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        if (this.state.showingImage) {
            return ( <
                div style = {
                    { display: 'flex', justifyContent: 'center' }
                } >
                <
                img style = {
                    { height: '300px', width: '90%' }
                }
                alt = { this.state.showingImage }
                src = { this.state.showingImage }
                />   < /
                div >
            )
        }

        return (

            <
            div >
            <
            div role = "presentation"
            className = "image-slide"
            style = { styles }
            onClick = { this.onShowImage } >

            <
            div className = "jumbo-text" >
            <
            p > { this.state.image.title } < /p>   <
            p > { this.state.image.sentence } < /p>

            <
            /div>

            <
            /div> < /
            div >


        );


    }





}


ImageSlide.propTypes = {
    url: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sentence: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};


export default ImageSlide;