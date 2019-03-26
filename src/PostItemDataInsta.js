import React, { Component } from 'react';


class PostItemDataInsta extends Component {

    render() {
        return (
            <div>
                {
                    this.props.image_url &&
                    <img src="https://picsum.photos/200" alt="InstagramPicturePost" />

                }
            </div>
        );
    }
}

export default PostItemDataInsta;
