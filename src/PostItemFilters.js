import React, { Component } from 'react';

class PostItemFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: ''
        }
    }

    isSelect = (filter) => {
        this.state.isSelect !== filter ? this.setState({
            isSelect: filter
        }) : this.setState({
            isSelect: ''
        })
    }

    render() {
        return (
            <div className="filter">
                <div> Number of posts : {this.props.numberItems}</div>
                <div>
                    <div onClick={() => { this.props.filter('Manual'); this.isSelect('Manual') }}
                        className={'filterItem' + (this.state.isSelect === 'Manual' ? 'Selected' : 'Unselected')}
                    >
                        Manual
                    </div>
                    <div onClick={() => { this.props.filter('Instagram'); this.isSelect('Instagram') }}
                        className={'filterItem' + (this.state.isSelect === 'Instagram' ? 'Selected' : 'Unselected')}
                    >
                        Insta
                    </div>
                    <div onClick={() => { this.props.filter('Twitter'); this.isSelect('Twitter') }}
                        className={'filterItem' + (this.state.isSelect === 'Twitter' ? 'Selected' : 'Unselected')}
                    >
                        tweet
                    </div>
                </div>
            </div>
        )
    }
}
export default PostItemFilters;