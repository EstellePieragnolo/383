import React, { Component } from 'react';


class PostItemDataTwitter extends Component {

    render() {
        return (
            <div>
                <h1>{this.props.userName}</h1>
                <p>{this.props.tweet}</p>
            </div>
        );
    }
}

export default PostItemDataTwitter;
