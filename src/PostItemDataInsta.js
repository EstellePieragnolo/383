import React, { Component } from 'react';
import instaLogo from './img/logo_insta.png';
import './_PostItemDataInsta.scss';

class PostItemDataInsta extends Component {

    linkHashtags = (string) => {
        const myString = string;
        const hashtagRegex = /^(?!.*\bRT\b)(?:.+\s)?#\w+/i;

        const newString = myString.split(' ');
        return newString.map(s => {

            if (hashtagRegex.test(s) === true) {
                const hashtag = s.replace('#', '');
                return <a href={`https://www.instagram.com/explore/tags/${hashtag}`}
                    key={s}
                    target="_blank" rel="noopener noreferrer"
                    className="twitterTextHashtag" >{s} </a>
            }
            else return `${s} `
        })
    }

    render() {
        return (
            <div className="insta">
                <div className="instaHeader">
                    <div className="instaHeaderLogo">
                        <img src={instaLogo} alt="" />
                    </div>
                    <p className="instaHeaderDate">{this.props.date}</p>
                </div>
                <a className="instaPicture" href={this.props.link} target="_blank" rel="noopener noreferrer">
                    {
                        this.props.image_url &&
                        <img src="https://picsum.photos/400" alt="InstagramPicturePost" />
                    }
                </a>
                <div className="instaText">
                    <h3>{this.props.user_name}</h3>
                    <p>{this.linkHashtags(this.props.caption)}</p>
                </div>

            </div>
        );
    }
}

export default PostItemDataInsta;
