import React, { Component } from 'react';
import twitterLogo from './img/logo_twitter.png';
import Linkify from 'react-linkify';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    // linkifyUrl = (string) => {
    //     return <Linkify properties={{ target: '_blank', style: { color: 'rgb(212, 0, 0)' } }}>{string}</Linkify>
    // }

    // getHashtag = (string) => {
    //     string = string.replace(/[@]+[A-Za-z0-9_-]+/g, function (u) {
    //         var username = u.replace("@", "")
    //         return "http://twitter.com/" + username
    //     });
    // }

    linkHashtagsMentions = (string) => {
        const myString = string;
        const regex = new RegExp(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i);
        const newString = myString.split(' ');
        return newString.map(s => {
            if (regex.test(s) === true) {
                return <a href={`https://twitter.com/${s}`} target="_blank" rel="noopener noreferrer" className="twitterTextMention" >{s} </a>
            } else return `${s} `
        })
    }

    render() {
        return (
            <div className="twitter">
                <div className="twitterLogo">
                    <img src={twitterLogo} alt="" />
                </div>
                <div className="twitterText">
                    <h1>{this.props.userName}</h1>
                    <p >{this.linkHashtagsMentions(this.props.tweet)}</p>
                </div>
            </div>
        );
    }
}

export default PostItemDataTwitter;
