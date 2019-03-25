import React, { Component } from 'react';
import PostItemData from './PostItemData';

class PostItem extends Component {



    render() {
        return (
            <div>
                {
                    this.props.items.map(items => {
                        return (
                            <PostItemData key={items.item_data.image_id}
                                image_url={items.item_data.image_url} />
                        );

                    })
                }
            </div>
        );
    }
}

export default PostItem;
