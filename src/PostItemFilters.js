import React, { Component } from 'react';

class PostItemFilters extends Component {

    render() {
        return (
            <div className="appItemsFilters">
                <div>
                    <div onClick={this.props.filter('Manual')}>Manual</div>
                    <div onClick={this.props.filter('Instagram')}>Insta</div>
                    <div onClick={this.props.filter('Twitter')}>tweet</div>
                </div>
            </div>
        )
    }
}
export default PostItemFilters;