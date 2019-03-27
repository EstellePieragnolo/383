import React, { Component } from 'react';
import './_PostItemDataManual.scss';

class PostItemDataManual extends Component {

    render() {
        return (
            <div className="manual">
                <div className="manualLogo">
                    <p>AFF</p>
                </div>
                {
                    this.props.image_url &&
                    <div className="manualPicture">
                        <img ref="image" src="https://picsum.photos/400/?random" alt="ManualPicturessPost" />
                    </div>
                }
                <div className="manualText">
                    <p>{this.props.text}</p>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.link_text}</a>
                </div>
            </div>
        );
    }
}

export default PostItemDataManual;
