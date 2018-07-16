import React, { Component } from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTopIOS: {
        height: 20,
        backgroundColor: "white",
    },
    headerTopAndroid: {
        height: 0
    },
    gridContainer: {
        height: 135,
        left: 0,
        right: 0,
        flex: 1,
    },
    gridImage: {
        flex: 1
    },
    textInput: {
        flexDirection: "row",
        alignItems: "center",

    },
    searchIconStyle: {
        marginBottom: 0,
        height: 20,
        width: 20,
    },
    searchCategoryContainer: {
        marginTop: 10,
        height: 35,
        paddingLeft: 17,
    },
    searchInput: {
        fontSize: 20,
        color: "rgb(153,153,153)",
        padding: 0,
        paddingRight: 16,
        marginLeft: 14,
        flex: 1,
    },
});

export default styles;