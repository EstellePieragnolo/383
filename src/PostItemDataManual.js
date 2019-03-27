import React, { Component } from 'react';
import './_PostItemDataManual.scss';

class PostItemDataManual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: [],
            error: false
        }
    }

    componentDidMount() {
        fetch('https://private-cc77e-aff.apiary-mock.com/posts', { mode: 'no-cors' })
            .then(response => response.blob())
            .then(data => this.setState({ items: data.items }))
            .catch(error => {
                console.log(error);
                this.setState({
                    error: true
                });
            });
    }

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
