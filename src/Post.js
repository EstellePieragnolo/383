import React, { Component } from 'react';
import PostItem from './PostItem';
import './_Post.scss';
import StackGrid from "react-stack-grid";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    setColumnWidth = () => {
        const size = this.state.width;
        if (size <= 575) {
            return '100%'
        }
        else if (size <= 735 && size > 575) {
            return '90%'
        }
        else if (size > 735 && size <= 972) {
            return '50%'
        }
        else return '33.33%'
    }

    updateLayout = () => {
        this.grid.updateLayout();
    };

    render() {

        return (
            <div className="container">
                <StackGrid
                    monitorImagesLoaded
                    columnWidth={this.setColumnWidth()}
                    gutterWidth={70}
                    gutterHeight={60}
                    gridRef={grid => this.grid = grid}
                >
                    {
                        this.props.items.map(items => {
                            return (

                                <PostItem key={items.item_id}
                                    item_id={items.item_id}
                                    item_data={items.item_data}
                                    service_name={items.service_name}
                                    item_published={items.item_published} />

                            );

                        })
                    }
                </StackGrid>
            </div>
        );
    }
}

export default Post;
