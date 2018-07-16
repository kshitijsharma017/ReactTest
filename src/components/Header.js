import React, { Component } from 'react';
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import {images} from '../config/constant';
import Styles from './Styles';
export default class Header extends Component {
constructor(props){
  super(props);
}


  render() {

    return (
      <View>
 {/* <StatusBar
     backgroundColor="black"
     barStyle="light-content"
   /> */}
    {Platform.OS === 'ios' ? <View style={Styles.headerTopIOS}/> : <View style={Styles.headerTopAndroid}/>} 
 <View style={[Styles.mainHeader,this.props.height]}>
{this.props.back ?
  <TouchableOpacity style={Styles.backView} onPress={()=>this.props.onPress()}>
   <Image style={Styles.menuIcon} source={images.backIcon}/>
</TouchableOpacity>:
<View style={Styles.backView}/>
}
   <View style={Styles.titleView}>
   <Text style={[Styles.title,this.props.fontSize]}>{this.props.title}</Text>

             </View>

{this.props.settings ?
  <TouchableOpacity style={Styles.rightView}/>
:
<View style={Styles.rightView}/>
}


</View>
      </View>
    );
  }
}
