import React, { Component } from 'react';
import Post from './Post';
import './_App.scss';
import PostItemFilters from './PostItemFilters';
import Slider from './Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      error: false,
      startSlice: 0,
      endSlice: 6,
      numberOfItems: 0,
      filterItems: "",
      allItems: []
    }
  }

  componentDidMount() {
    fetch('https://private-cc77e-aff.apiary-mock.com/posts', {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }, method: 'GET', mode: 'cors'
    })
      .then(response => response.json())
      .then(data => this.setState({
        items: data.items.sort((a, b) => {
          return new Date(b.item_published) - new Date(a.item_published)
        }).slice(this.state.startSlice, this.state.endSlice),
        numberOfItems: data.items.length,
        allItems: data.items.sort((a, b) => {
          return new Date(b.item_published) - new Date(a.item_published)
        }).slice(this.state.startSlice, this.state.endSlice)
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

    fetch('https://private-cc77e-aff.apiary-mock.com/posts', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => this.setState({
        items: this.state.allItems.concat(
          data.items.sort((a, b) => {
            return new Date(b.item_published) - new Date(a.item_published)
          }).slice(this.state.startSlice, this.state.endSlice)
        ),
        allItems: this.state.allItems.concat(
          data.items.sort((a, b) => {
            return new Date(b.item_published) - new Date(a.item_published)
          }).slice(this.state.startSlice, this.state.endSlice)
        )
      }))
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });

  }

  changeFilterItems = (service) => () => {
    if (this.state.filterItems !== service) {
      this.setState({ filterItems: service });
      this.setState({
        items: [...this.state.allItems.filter((i, n) => {
          if (i.service_name === service) {
            return i
          } else return null
        })]
      })
      return this.state.items;
    }
    else if (this.state.filterItems === service) {
      this.setState({ filterItems: '' });
      this.setState({ items: [...this.state.allItems] })
      return this.state.items
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <Slider />
        </div>
        <PostItemFilters
          filter={this.changeFilterItems}
          numberItems={this.state.items.length}
          selected={this.state.filterItems} />
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
