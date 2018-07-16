import React, { Component } from 'react';
import { FlatList, View, Platform } from 'react-native';
import Styles from "./Styles";
import { getPhotos } from "../Utils/Api";
import PhotoGrid from "./PhotoGrid";
import PhotoSearch from "./PhotoSearch";
import { connect } from 'react-redux';
import * as Actions from '../actions/Action';
import { bindActionCreators } from 'redux';

class PhotosList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photosList: [],
            page: 1,
            refreshing: false,
            searchVal: "",
            searchCheck: false
        }
    }


    componentWillMount() {
        this.getPhotosList(this.state.page, this.state.searchVal)
    }

    /* To fetch photos list*/

    getPhotosList = (page, searchText) => {
        getPhotos(page, searchText).then((response) => {
            let photos = this.state.photosList;
            if (this.state.searchCheck)
                photos = [];
            this.setState({ photosList: photos.concat(response.photos.photo) });
        }, (error) => {
            this.setState({ showSpinner: false });
        });
    };

    /* To render photos list*/

    renderPhotosList = (item, index) => {
        return <PhotoGrid
            index={index}
            photo={item}
            onGridPress={() => this.onGridPress(item, index)} />
    }

    /* On photo tap*/

    onGridPress = (item) => {
        const photo = item;
        const URL = `https://farm${photo.farm}.static.flickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        this.props.setImageUrl(URL);
        this.props.navigation.navigate("PhotoDetails")
    }

    /* On load more photo */

    handleLoadMore = () => {
        if (!this.state.refreshing) {
            this.setState(
                {
                    page: this.state.page + 1,
                    searchCheck: false
                },
                () => {
                    this.getPhotosList(this.state.page, this.state.searchVal);
                }
            );
        }

    };

    render() {
        return (
            <View style={Styles.container}>
                {Platform.OS === 'ios' ? <View style={Styles.headerTopIOS} /> : <View style={Styles.headerTopAndroid} />}
                <View style={Styles.searchCategoryContainer}>
                    <PhotoSearch
                        onSubmitEditing={() => {
                            if (this.state.searchVal != undefined) {
                                if (this.state.searchVal.trim().length != 0) {
                                    this.setState({ page: 1, searchCheck: true })
                                    this.getPhotosList(this.state.page, this.state.searchVal)
                                }

                            }
                        }
                        }
                        onChangeText={(text) => {
                            if (text.length == 0) {
                                this.setState({ searchVal: "", page: 1 })
                                this.getPhotosList(this.state.page, this.state.searchVal);
                            }
                            else
                                this.setState({ searchVal: text })
                        }}
                    />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    data={this.state.photosList}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.1}
                    renderItem={({ item, index }) => this.renderPhotosList(item, index)}
                />
            </View>
        );
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(null, mapDispatchToProps)(PhotosList);

