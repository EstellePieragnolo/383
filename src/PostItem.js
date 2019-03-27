import React, { Component } from 'react';
import PostItemDataManual from './PostItemDataManual';
import PostItemDataInsta from './PostItemDataInsta';
import PostItemDataTwitter from './PostItemDataTwitter';
import './_PostItem.scss';

class PostItem extends Component {

    render() {
        const { item_data } = this.props;
        return (
            <div className="postItems">
                {
                    this.props.service_name === 'Manual' &&

                    <PostItemDataManual
                        image_id={item_data.image_id}
                        text={item_data.text}
                        link={item_data.link}
                        link_text={item_data.link_text}
                        image_url={item_data.image_url}
                    >
                        {this.props.item_id}
                    </PostItemDataManual>

                }
                {
                    this.props.service_name === 'Instagram' &&

                    <PostItemDataInsta
                        link={item_data.link}
                        caption={item_data.caption}
                        user_name={item_data.user.username}
                        image_url={item_data.image.medium}
                    />

                }
                {
                    this.props.service_name === 'Twitter' &&

                    <PostItemDataTwitter
                        tweet={item_data.tweet}
                        userName={item_data.user.username}
                    />


                }
            </div>
        );
    }
}

export default PostItem;
