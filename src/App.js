import React, { Component } from 'react';
import Post from './Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false
    }
  }

  componentDidMount() {
    fetch('https://private-cc77e-aff.apiary-mock.com/posts', {
      headers: {
        "Content-Security-Policy": "upgrade-insecure-requests"
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ items: data.items }))
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <Post items={this.state.items} />
    );
  }
}

export default App;
