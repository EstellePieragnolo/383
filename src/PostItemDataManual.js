import React, { Component } from 'react';


class PostItemData extends Component {

    // startDownload(url) {
    //     let imageURL = url;

    //     this.downloadedImg = new Image();
    //     this.downloadedImg.crossOrigin = "Anonymous";
    //     this.downloadedImg.addEventListener("load", this.imageReceived, false);
    //     this.downloadedImg.src = imageURL;
    // }

    // imageReceived() {
    //     let canvas = document.createElement("canvas");
    //     let context = canvas.getContext("2d");

    //     canvas.width = this.downloadedImg.width;
    //     canvas.height = this.downloadedImg.height;

    //     context.drawImage(this.downloadedImg, 0, 0);
    //     this.imageBox.appendChild(canvas);

    //     try {
    //         localStorage.setItem("saved-image-example", canvas.toDataURL("image/png"));
    //     }
    //     catch (err) {
    //         console.log("Error: " + err);
    //     }
    // }

    // componentDidMount() {
    //     const canvas = this.refs.canvas;
    //     const ctx = canvas.getContext("2d");
    //     const img = this.refs.image;

    //     img.onload = () => {
    //         ctx.drawImage(img, 0, 0)
    //         ctx.font = "40px Courier"
    //         ctx.fillText(this.props.text, 210, 75)
    //     }
    // }

    toHTTPS = (url) => {
        return url.replace('http:', 'https:')
    }
    render() {
        return (
            <div>

                <img ref="image" src={this.toHTTPS(this.props.image_url)} alt="ManualPicturessPost" />
            </div>
        );
    }
}

export default PostItemData;
