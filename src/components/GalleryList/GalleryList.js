import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        console.log(this.props);

        const htmlArray = this.props.galleryData.map((item, index) => {
            return (
                <GalleryItem key={index} item={item} putGallery={this.props.putGallery}/>
            )
        });

        return (
            <div>
                {htmlArray}
            </div>
        )
    }
}

export default GalleryList;