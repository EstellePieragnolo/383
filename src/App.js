import React, { Component } from 'react';
import Post from './Post';
import './_App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false,
      startSlice: 0,
      endSlice: 6,
      numberOfItems: 0
    }
  }

  componentDidMount() {
    fetch('https://private-cc77e-aff.apiary-mock.com/posts?offset=1', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({
        items: data.items.slice(this.state.startSlice, this.state.endSlice),
        numberOfItems: data.items.length
      }))
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }

  loadmore = () => {
    this.setState({
      startSlice: this.state.startSlice + 6,
      endSlice: this.state.endSlice + 6,
    })

    fetch('https://private-cc77e-aff.apiary-mock.com/posts?offset=1', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({
        items: this.state.items.concat(
          data.items.slice(this.state.startSlice, this.state.endSlice)
        )
      }))
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <div className="app">
        <Post items={this.state.items} />
        {
          this.state.items.length < this.state.numberOfItems &&
          <div className="appLoadmore">
            <div className="appLoadmoreButton" onClick={this.loadmore}>LoadMore</div>
          </div>
        }
      </div>
    );
  }
}

export default App;
