import React, { Component } from 'react';


class PostItemDataInsta extends Component {


    render() {
        return (
            <div>
                {
                    this.props.image_url &&
                    <img src={this.props.image_url} alt="" />
                }
            </div>
        );
    }
}

export default PostItemDataInsta;
