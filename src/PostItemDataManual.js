import React, { Component } from 'react';


class PostItemData extends Component {

    render() {
        return (
            <div>
                <img ref="image" src="https://picsum.photos/200/?random" alt="ManualPicturessPost" />
            </div>
        );
    }
}

export default PostItemData;
