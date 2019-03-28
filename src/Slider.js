import React, { Component } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            index: 0
        }
    }

    componentDidMount() {
        this.sliderImages()
    }

    sliderImages = () => {
        const img = ['https://picsum.photos/200', 'https://picsum.photos/400/?random', 'https://picsum.photos/g/200'];
        this.setState({
            images: [...img]
        });
        return this.state.images
    }

    next = () => {
        if (this.state.index < this.state.images.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }
        else this.setState({
            index: 0
        })
    }

    previous = () => {
        if (this.state.index === 0) {
            this.setState({
                index: this.state.images.length - 1
            })
        }
        else this.setState({
            index: this.state.index - 1
        })
    }

    render() {
        const { images, index } = this.state;
        return (
            <div>

                <span onClick={this.previous}>Previous</span>

                <div>
                    <img src={images[index]} alt="" />
                </div>

                <span onClick={this.next}>Next</span>

            </div>
        )
    }
}
export default Slider;