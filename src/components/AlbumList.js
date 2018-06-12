import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetail';
import Card from './Card';

class AlbumList extends Component {
    constructor(){
        super();
        this.state = {
            albums: []
        }
    }

    componentWillMount() {
        console.log('Inside will mour');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => this.setState({albums: res.data}))
            .catch(err => console.log(err));
    }
    renderAlbums = () => {
        return this.state.albums.map(album => <AlbumDetails key={album.title} album={album} />);
    }
    render() {
        return (
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
        );
    }
}

export default AlbumList;
