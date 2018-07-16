import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import PhotosList from './PhotosList'
import PhotoDetails from './PhotoDetails/PhotoDetails'
const Route = StackNavigator({
  PhotosList: {
    screen: PhotosList,
    navigationOptions: (props) => ({
      header: null,
    }),

  },
  PhotoDetails: {
    screen: PhotoDetails,
    navigationOptions: (props) => ({
      header: null,
    }),
  },
},
  {
    initialRouteName: 'PhotosList',
  });


export default Route;

