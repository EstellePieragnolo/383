import React, { Component } from 'react';
import twitterLogo from './img/logo_twitter.png';
import Linkify from 'react-linkify';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    linkifyUrl = (string) => {
        return <Linkify properties={{ target: '_blank', style: { color: 'rgb(212, 0, 0)' } }}>{string}</Linkify>
    }

    // getHashtag = (string) => {
    //     string = string.replace(/[@]+[A-Za-z0-9_-]+/g, function (u) {
    //         var username = u.replace("@", "")
    //         return "http://twitter.com/" + username
    //     });
    // }

    render() {
        return (
            <div className="twitter">
                <div className="twitterLogo">
                    <img src={twitterLogo} alt="" />
                </div>
                <div className="twitterText">
                    <h1>{this.props.userName}</h1>
                    <p >{this.linkifyUrl(this.props.tweet)}</p>
                </div>
            </div>
        );
    }
}

export default PostItemDataTwitter;
