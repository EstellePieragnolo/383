import React, { Component } from 'react';
import PostItemData from './PostItemData';

class PostItem extends Component {



    render() {
        const { item_data } = this.props;
        return (
            <div>
                {
                    <PostItemData
                        image_id={item_data.image_id}
                        text={item_data.text}
                        link={item_data.link}
                        link_text={item_data.link_text}
                        image_url={item_data.image_url}
                    />
                }
            </div>
        );
    }
}

export default PostItem;
