import React, { Component } from 'react';
import instaLogo from './img/logo_insta.png'
import './_PostItemDataInsta.scss';

class PostItemDataInsta extends Component {

    render() {
        return (
            <div className="insta">
                <div className="instaLogo">
                    <img src={instaLogo} alt="" />
                </div>
                <a className="instaItem" href={this.props.link} target="_blank" rel="noopener noreferrer">
                    {
                        this.props.image_url &&
                        <div className="instaItemPicture">
                            <img src="https://picsum.photos/400" alt="InstagramPicturePost" />
                        </div>
                    }
                    <div className="instaItemText">
                        <h4>{this.props.user_name}</h4>
                        <p>{this.props.caption}</p>
                    </div>
                </a>
            </div>
        );
    }
}

export default PostItemDataInsta;
