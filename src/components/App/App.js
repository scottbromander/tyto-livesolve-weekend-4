import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    galleryData: [],
    lastLike: 0
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      this.setState({
        galleryData: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  putGallery = (id) => {
    Axios({
      method: 'PUT',
      url: '/gallery/like/' + id
    })
    .then((response) => {
      this.getGallery();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <p>Last Image That was Liked, has an ID of: {this.state.lastLike}</p>
        <GalleryList galleryData={this.state.galleryData} putGallery={this.putGallery}/>
      </div>
    );
  }
}

export default App;
