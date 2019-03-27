import React, { Component } from 'react';
import Post from './Post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false,
      startSlice: 0,
      endSlice: 4
    }
  }

  componentDidMount() {
    fetch('https://private-cc77e-aff.apiary-mock.com/posts?offset=1', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({ items: data.items.slice(this.state.startSlice, this.state.endSlice) }))
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }

  loadmore = () => {
    this.setState({
      startSlice: this.state.startSlice + 4,
      endSlice: this.state.endSlice + 4,
    })

    fetch('https://private-cc77e-aff.apiary-mock.com/posts?offset=1', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({ items: this.state.items.concat(data.items.slice(this.state.startSlice, this.state.endSlice)) }))
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
        <div className="appLoadMore">
          <button onClick={this.loadmore}>LoadMore</button>
        </div>
      </div>
    );
  }
}

export default App;
