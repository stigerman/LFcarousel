import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image } from 'semantic-ui-react'

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.images
        }
    }


    componentWillReceiveProps(nextProps) {
        this.setState({
            currIndex: nextProps.index
        })
    }



    handleClick(event, data, index) {
        this.props.gallerySelection(data, index);
    }

    render() {
        const { images } = this.state;
        const currIndex = this.state.currIndex

        return ( <
            div className = "parent-wrapper" >
            <
            div className = "parent" > {
                images.map((image, index) => ( <
                    div key = { image.id }
                    className = "child" >
                    <
                    Image onClick = {
                        ((e) => this.handleClick(e, image, index))
                    }
                    className = {
                        (currIndex === index ? 'selected' : '')
                    }
                    src = { image.url }
                    />   < /
                    div >


                ))


            }

            <
            /div >

            <
            /div>



        )
    }
}

Gallery.defaultProps = {
    index: 0
};

Gallery.propTypes = {
    index: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        sentence: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string
    })).isRequired,
    gallerySelection: PropTypes.func.isRequired
};