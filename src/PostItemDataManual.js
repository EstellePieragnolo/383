import React, { Component } from 'react';


class PostItemDataManual extends Component {


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

export default PostItemDataManual;
