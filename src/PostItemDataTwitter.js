import React, { Component } from 'react';
import twitterLogo from './img/logo_twitter.png';
import './_PostItemDataTwitter.scss';

class PostItemDataTwitter extends Component {

    linkHashtagsMentions = (string) => {
        const myString = string;
        const mentionRegex = /^(?!.*\bRT\b)(?:.+\s)?@\w+/i;
        const hashtagRegex = /^(?!.*\bRT\b)(?:.+\s)?#\w+/i;
        const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;

        const newString = myString.split(' ');
        return newString.map(s => {
            if (mentionRegex.test(s) === true) {
                return <a href={`https://twitter.com/${s}`}
                    key={s}
                    target="_blank" rel="noopener noreferrer"
                    className="twitterTextMention" >{s} </a>
            }
            else if (hashtagRegex.test(s) === true) {
                const hashtag = s.replace('#', '');
                return <a href={`https://twitter.com/hashtag/${hashtag}`}
                    key={s}
                    target="_blank" rel="noopener noreferrer"
                    className="twitterTextHashtag" >{s} </a>
            }
            else if (urlRegex.test(s) === true) {
                return <a href={s}
                    key={s}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="twitterTextHashtag" >{s} </a>
            }
            else return `${s} `
        })
    }

    render() {
        return (
            <div className="twitter">
                <div className="twitterHeader">
                    <div className="twitterHeaderLogo">
                        <img src={twitterLogo} alt="" />
                    </div>
                    <p className="twitterHeaderDate">{this.props.date}</p>
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
