import React, { Component } from 'react';
import './_PostItemDataManual.scss';

class PostItemDataManual extends Component {

    render() {
        return (
            <div className="manual">
                {
                    this.props.image_url &&
                    <div className="manualPicture">
                        <img ref="image" src="https://picsum.photos/400/?random" alt="ManualPicturessPost" />
                    </div>
                }
            </div>
        );
    }
}

export default PostItemDataManual;
