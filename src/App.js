import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false
    }
  }

  componentDidMount() {
    fetch('http://private-cc77e-aff.apiary-mock.com/posts')
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
      <div className="App" />
    );
  }
}

export default App;
