import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {

    state = {
        showImage: true
    }

    toggleImage = (event) => {
        this.setState({
            showImage: !this.state.showImage
        })
    }

    render() {
        let imageEl = <img src={this.props.item.path} alt={this.props.item.description} />;

        if(!this.state.showImage) {
            imageEl = <p>{this.props.item.description}</p>;
        }

        return (
            <div className="cell">
                <div onClick={this.toggleImage}>
                    {imageEl}
                </div>

                <p>Likes: {this.props.item.likes}</p>
                <button onClick={(event) => {this.props.putGallery(this.props.item.id)}}>Like!</button>
            </div>
        )
    }
}

export default GalleryItem;