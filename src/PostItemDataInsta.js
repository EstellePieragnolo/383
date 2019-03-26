import React, { Component } from 'react';
import './_PostItemDataInsta.scss';

class PostItemDataInsta extends Component {

    render() {
        return (
            this.props.image_url &&
            <img src="https://picsum.photos/200" alt="InstagramPicturePost" />
        );
    }
}

export default PostItemDataInsta;
