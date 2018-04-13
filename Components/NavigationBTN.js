import React, { Component } from 'react';
import {View, Button, StyleSheet, TextInput, } from 'react-native';
// import {StackNavigator} from 'react-navigation';

// class DetailsScreen extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//             </View>
//             <View>
//         );
//     }
// }
//
// const RootStack = StackNavigator(
//     {
//         NavigationBtn: {
//             screen: NavigationBtn,
//         },
//         Details: {
//             screen: DetailsScreen,
//         },
//     },
//     {
//         initialRouteName: 'NavigationBtn',
//     }
// );




class NavigationBtn extends Component {
    state={
      text: 'placeholder'
    };
    pressBtnExpance = ()=> {
        alert('true');
        // this.props.navigation.navigate('Details')
    };
    pressBtnIncomes = ()=>{
        alert('true');
        // this.props.navigation.navigate('Details')
    };
    changeText =(text) => this.setState({text});

    render(){
        return(
            <View style={styles.wrapBtn}>
                <Button style={styles.btn}
                        onPress={this.pressBtnExpance}
                        title="Расход сегодня"
                        color="#841584"
                />
                <TextInput
                    style={styles._input}
                    onChangeText={this.changeText}
                    value={this.state.text}
                />
                <Button style={styles.btn}
                        onPress={this.pressBtnIncomes}
                        title="Доход"
                        color="#841584"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapBtn:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#4286f4',
    },
    btn:{
        color: '#121212',
    },
    _input:{
        display: 'none',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default NavigationBtn;