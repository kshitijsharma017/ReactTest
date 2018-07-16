import {NetInfo,Platform} from 'react-native';

//To check network connection

export function checkNetworkConnection() {
    return  new Promise((resolve,reject)=>{
        if(Platform.OS === 'ios'){
        function handleFirstConnectivityChange(isConnected) { 
            NetInfo.isConnected.removeEventListener( 'connectionChange', handleFirstConnectivityChange ); 
            resolve(isConnected);
         }
          NetInfo.isConnected.addEventListener( 'connectionChange', handleFirstConnectivityChange );

        }
        else {
          NetInfo.isConnected.fetch().then(isConnected => {
                resolve(isConnected);
                 });
        }
    })

}