import React, { Component } from 'react';
import PostItemDataManual from './PostItemDataManual';
import PostItemDataInsta from './PostItemDataInsta';
import PostItemDataTwitter from './PostItemDataTwitter';
import './_PostItem.scss';


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: ''
        }
    }

    date = (date) => {
        const d = date.split(/[- :]/);
        const arrayDate = new Date(d[0], d[1] - 1, d[2], d[3], d[4], d[5]);
        const newDate = new Date(arrayDate);
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];
        const month = newDate.getMonth();
        const day = newDate.getDate();
        const year = newDate.getFullYear();

        return day + " " + monthNames[month] + " " + year;
    }

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
                        date={this.date(this.props.date)}
                    />

                }
                {
                    this.props.service_name === 'Instagram' &&

                    <PostItemDataInsta
                        link={item_data.link}
                        caption={item_data.caption}
                        user_name={item_data.user.username}
                        image_url={item_data.image.medium} date={this.date(this.props.date)}
                    />

                }
                {
                    this.props.service_name === 'Twitter' &&

                    <PostItemDataTwitter
                        tweet={item_data.tweet}
                        userName={item_data.user.username} date={this.date(this.props.date)}
                    />


                }
            </div>
        );
    }
}

export default PostItem;
