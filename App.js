import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';


class App extends Component {

    state = {
        isDateTimePickerVisible: false,
        date: '',

    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked (date) {
        this.setState({
            date: date.toDateString()
        });
        this._hideDateTimePicker();
    };
    pressBtn = ()=>{console.log('ok')};


    render() {

        return (
            <View style={styles.wrap}>
                <View style={styles.wrap2}>
                    <Text style={styles.topText}>
                        Мой доход
                    </Text>
                </View>
                <View style={styles.wrapDate}>

                    <TouchableOpacity onPress={this._showDateTimePicker.bind(this)}>
                        <Text style={styles.wrapDateText}>Календарь</Text>
                    </TouchableOpacity>
                    <Text style={styles.wrapDateText}>{this.state.date }</Text>
                    <Text style={styles.wrapDateText}>На сегодня:  $</Text>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked.bind(this)}
                        onCancel={this._hideDateTimePicker.bind(this)}
                    />

                </View>
                <View style={styles.wrapBtn}>
                    <Button style={styles.btn}
                        onPress={this.pressBtn}
                        title="Расход сегодня"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Button style={styles.btn}
                        onPress={this.pressBtn}
                        title="Доход"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
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
    wrap2:{
        backgroundColor: '#4286f4',
        width: '100%',
    },
    topText: {
        fontSize: 64,
        textAlign: 'center',
        fontWeight:'bold',
        color: '#000'
    },
    wrapDate:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#4286f4',
    },
    wrapDateText:{
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',

    },
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

});

export default App;