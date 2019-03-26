import React, { Component } from 'react';
import twitterLogo from './img/logo_twitter.png';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    render() {
        return (
            <div className="twitter">
                <div className="twitterLogo">
                    <img src={twitterLogo} alt="" />
                </div>
                <div className="twitterText">
                    <h1>{this.props.userName}</h1>
                    <p>{this.props.tweet}</p>
                </div>
            </div>
        );
    }
}

export default PostItemDataTwitter;
