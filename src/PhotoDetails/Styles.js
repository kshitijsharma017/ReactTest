import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: 60,
        width: width,
        backgroundColor: "#049EDA",
        flexDirection: 'row'
    },
    backButton: {
        flex: 1,
        backgroundColor: 'transparent',
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    backImage: {
        marginTop: 12,
        marginLeft: 8
    },
    headerTextContainer: {
        flex: 3,
        height: 60,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    headerText: {
        color: '#FFFFFF',
        marginTop: 12,
        marginLeft: (Platform.OS === 'ios') ? 25 : 30,
        width: width,
        fontSize: 18

    }


});

export default styles;