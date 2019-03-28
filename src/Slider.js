import React, { Component } from 'react';
import './_Slider.scss';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            index: 0,
            play: true
        }
    }

    componentDidMount() {
        this.sliderImages();
        this.actionSlider();
    }

    componentWillUnmount() {
        clearInterval(this.next);
    }

    sliderImages = () => {
        const img = ['https://picsum.photos/1000', 'https://picsum.photos/1000?image=1024', 'https://picsum.photos/g/1000'];
        this.setState({
            images: [...img]
        });
        return this.state.images
    }

    actionSlider = () => {
        setInterval(() => {
            this.next()
        }, 3000);
    }


    next = () => {
        console.log('set')
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
            <div className="slider">

                <div className="sliderImages" style={{ backgroundImage: `url(${images[index]})` }}>
                    <span className="sliderImagesControlerPrevious" onClick={this.previous} />
                    <span className="sliderImagesControlerNext" onClick={this.next} />

                </div>
                <span className="sliderOverlay" style={{ backgroundImage: `url(${images[index]})` }} />

            </div>
        )
    }
}
export default Slider;