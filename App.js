import React, { Component } from 'react';
import { Text, View, StyleSheet,} from 'react-native';
import {StackNavigator} from 'react-navigation';

import AppHeader from './Components/Header';
import NavigationBtn from './Components/NavigationBTN';
// import RootStack from './Components/NavigationBTN'




class App extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <View>
                 <AppHeader/>
                 <NavigationBtn/>
                    {/*<RootStack />*/}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default App;