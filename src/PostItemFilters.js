import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './_PostItemFilters.scss';

class PostItemFilters extends Component {

    render() {
        return (
            <div className="filter" id="up">
                <div className="filterItem">
                    <div onClick={this.props.filter('Manual')}
                        className={'filterItemButton' + (
                            this.props.selected === 'Manual' ? 'Selected' : 'Unselected'
                        )}
                    >
                        Manual
                    </div>
                    <div onClick={this.props.filter('Instagram')}
                        className={'filterItemButton' + (
                            this.props.selected === 'Instagram' ? 'Selected' : 'Unselected'
                        )}
                    >
                        Insta
                    </div>
                    <div onClick={this.props.filter('Twitter')}
                        className={'filterItemButton' + (
                            this.props.selected === 'Twitter' ? 'Selected' : 'Unselected'
                        )}
                    >
                        tweet
                    </div>
                </div>
                <div className="filterCount"> Number of posts : {this.props.numberItems}</div>

                <Link
                    className="filterAnchor"
                    activeClass="active"
                    to="up"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <div className="filterAnchorButton">
                        UP
                        </div>
                </Link>
            </div>
        )
    }
}
export default PostItemFilters;