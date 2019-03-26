import React, { Component } from 'react';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    render() {
        return (
            <div className="container">
                <h1>{this.props.userName}</h1>
                <p>{this.props.tweet}</p>
            </div>
        );
    }
}

export default PostItemDataTwitter;
