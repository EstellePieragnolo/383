import React, { Component } from 'react';
import PostItem from './PostItem';

class Post extends Component {


    render() {
        return (
            <div>
                {
                    this.props.items.map(items => {
                        return (
                            <PostItem key={items.item_id}
                                image_data={items.item_data}
                                service_name={items.service_name}
                                item_published={items.item_published} />
                        );

                    })
                }
            </div>
        );
    }
}

export default Post;
