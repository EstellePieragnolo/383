import React, { Component } from 'react';
import PostItem from './PostItem';
import './_Post.scss';

class Post extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.items.map(items => {
                        return (

                            <PostItem key={items.item_id}
                                item_id={items.item_id}
                                item_data={items.item_data}
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
