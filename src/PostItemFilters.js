import React, { Component } from 'react';

class PostItemFilters extends Component {

    render() {
        return (
            <div className="filter">
                <div> Number of posts : {this.props.numberItems}</div>
                <div>
                    <div onClick={this.props.filter('Manual')}
                        className={'filterItem' + (
                            this.props.selected === 'Manual' ? 'Selected' : 'Unselected'
                        )}
                    >
                        Manual
                    </div>
                    <div onClick={this.props.filter('Instagram')}
                        className={'filterItem' + (
                            this.props.selected === 'Instagram' ? 'Selected' : 'Unselected'
                        )}
                    >
                        Insta
                    </div>
                    <div onClick={this.props.filter('Twitter')}
                        className={'filterItem' + (
                            this.props.selected === 'Twitter' ? 'Selected' : 'Unselected'
                        )}
                    >
                        tweet
                    </div>
                </div>
            </div>
        )
    }
}
export default PostItemFilters;