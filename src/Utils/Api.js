
import { checkNetworkConnection } from './utils';

//Fetch list of photos

export function getPhotos(pageNum, searchText) {
    let text = (searchText == "" || undefined ? "kittens" : searchText);
    const baseURL = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3e7cc266ae2b0e0d78e279ce8e361736&format=json&nojsoncallback=1&safe_search=1&page=${pageNum}&per_page=10&text=${text}`;

    return checkNetworkConnection().then((networkStatus) => {
        if (networkStatus) {
            return fetch(baseURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    return new Promise((resolve, reject) => {
                        resolve(responseJson)
                    })
                })
        }
        else {
            return new Promise((resolve, reject) => {
                reject({ message: "Network unavailable. Please connect to a Wi-Fi or cellular network." })
            })
        }
    }, (reject) => {
        console.log("reject: " + reject);
    })




}
