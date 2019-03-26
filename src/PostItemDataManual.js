import React, { Component } from 'react';
import './_PostItemDataManual.scss';

class PostItemDataManual extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.image_url &&
                    <img ref="image" src="https://picsum.photos/200/?random" alt="ManualPicturessPost" />
                }
            </div>
        );
    }
}

export default PostItemDataManual;
