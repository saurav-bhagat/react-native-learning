import { AppRegistry, View } from 'react-native';
import React from 'react';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText="Albums!!" />
            <AlbumList />
        </View>
    );
};

//render it to device;
AppRegistry.registerComponent('secondAlbum', () => App);
