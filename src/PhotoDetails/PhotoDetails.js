import React, { Component } from 'react';
import {
    View,
    Image,
    Dimensions,
    Platform,
    Text,
    TouchableOpacity
} from 'react-native';
import backIcon from "../images/back.png";
import Styles from "./Styles";
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
class PhotoDetails extends Component {
    constructor(props) {
        super(props);
    }

    // Navigate back to photo list

    _goBack() {
        this.props.navigation.goBack();
    }

    render() {
        let getImageURLParam = this.props.imageUrl;
        return (
            <View style={Styles.container}>
                <View style={Styles.headerContainer}>
                    <TouchableOpacity style={Styles.backButton} onPress={() => { this._goBack() }}>
                        <Image source={backIcon} style={Styles.backImage} />
                    </TouchableOpacity>
                    <View style={Styles.headerTextContainer} >
                        <Text style={Styles.headerText}>Photo Show</Text>
                    </View>
                </View>
                <Image style={Styles.container} resizeMode="contain" source={{ uri: getImageURLParam }} />
            </View>
        );
    };

}

function mapStateToProps(state) {
    return {
        imageUrl: state.ImageReducer.imageUrl,
    };
}

export default connect(mapStateToProps)(PhotoDetails);
