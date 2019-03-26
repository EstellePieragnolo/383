import React, { Component } from 'react';
import './_PostItemDataInsta.scss';

class PostItemDataInsta extends Component {

    render() {
        return (
            <div classname="insta">
                {
                    this.props.image_url &&
                    <div classname="instaPicture">
                        <img src="https://picsum.photos/400" alt="InstagramPicturePost" />
                    </div>
                }
            </div>
        );
    }
}

export default PostItemDataInsta;
