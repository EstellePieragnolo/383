import React, { Component } from 'react';


class PostItemData extends Component {

    render() {
        return (
            <div>
                {
                    this.props.image_url &&
                    <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        src={this.props.image_url}>
                    </iframe>


                }
            </div>
        );
    }
}

export default PostItemData;
