import React, { Component } from 'react';
import './_PostItemDataInsta.scss';

class PostItemDataInsta extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.image_url &&
                    <img src="https://picsum.photos/200" alt="InstagramPicturePost" />

                }
            </div>
        );
    }
}

export default PostItemDataInsta;
