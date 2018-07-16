/* To render photo search*/

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput

} from 'react-native';

import Styles from "./Styles";

export default class PhotoSearch extends Component {
    render() {
        return (
            <View style={Styles.textInput}>
                <Image style={Styles.searchIconStyle} source={require('../images/icSearch.png')}></Image>
                <TextInput
                    autoCorrect={false}
                    allowFontScaling={false}
                    underlineColorAndroid="transparent"
                    placeholder="Search your interest…"
                    placeholderTextColor="rgb(153,153,153)"
                    returnKeyType='search'
                    style={Styles.searchInput}
                    onChangeText={this.props.onChangeText}
                    onSubmitEditing={this.props.onSubmitEditing}
                >
                </TextInput>
            </View>
        );
    }
}

