import React, { Component } from 'react';
import PostItem from './PostItem';
import './_Post.scss';
import StackGrid from "react-stack-grid";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            filterItems: ""
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }


    updateState = (state) => () => {
        this.setState({
            ...this.state,
            ...state
        });
    }

    changeFilterItems = (service) => {
        if (this.state.filterItems !== service) {
            return this.updateState({ filterItems: service });
        } else if (this.state.filterItems === service) {
            return this.updateState({ filterItems: '' });
        }
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
                <div className="postItemsFilters">
                    {/* <PostItemFilters
                        service={this.changeFilterItems}
                    /> */}
                    <div>
                        <div onClick={this.changeFilterItems('manual')}>Manual</div>
                        <div onClick={this.changeFilterItems('insta')}>Insta</div>
                        <div onClick={this.changeFilterItems('tweet')}>tweet</div>
                    </div>
                </div>
                <StackGrid
                    className="containerGrid"
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
                                    item_published={items.item_published}
                                    service={this.state.filterItems} />

                            );

                        })
                    }
                </StackGrid>
            </div>
        );
    }
}

export default Post;
