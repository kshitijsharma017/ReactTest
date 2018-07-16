/* To render photo grids in photo list*/

import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native';

import Styles from "./Styles";

export default class PhotoGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const photo = this.props.photo;
        const URL = `https://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return (
            <View style={Styles.gridContainer}>
                <TouchableWithoutFeedback
                    onPress={this.props.onGridPress}>
                    <Image style={Styles.gridImage} source={{ uri: URL }}
                        defaultSource={require('../images/Placeholder.png')}
                    />
                </TouchableWithoutFeedback>
            </View>
        );
    };

}