import React, { Component } from 'react';
import twitterLogo from './img/logo_twitter.png';
import Linkify from 'react-linkify';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    linkifyUrl = (string) => {
        return <Linkify>{string}</Linkify>
    }

    render() {
        return (
            <div className="twitter">
                <div className="twitterLogo">
                    <img src={twitterLogo} alt="" />
                </div>
                <div className="twitterText">
                    <h1>{this.props.userName}</h1>
                    {this.linkifyUrl(this.props.tweet)}
                </div>
            </div>
        );
    }
}

export default PostItemDataTwitter;
