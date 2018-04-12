import React, { Component } from 'react';
import { View, ScrollView, AppRegistry, TextInput, InputAccessoryView, Button, Text } from 'react-native';
import styled from 'styled-components';



export class Incomes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Placeholder Text',
            transaction: null,
            category: null,
        };
    }


    handleChangeInput = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleEnter = () => {
        const {onSubmit} = this.props;
        const {transaction, category} = this.state;

        onSubmit(Math.abs(parseFloat(transaction)), category);
        this.setState({transaction: null, category: null});
    };

    render() {
        const {transaction, category} = this.state;
        const inputAccessoryViewID = "uniqueID";

        return (
            <View>
                <ScrollView keyboardDismissMode="interactive">
                    <Text>Внести доход:</Text>
                    <TextInput
                        style={{
                            padding: 10,
                            paddingTop: 50,
                        }}
                        inputAccessoryViewID={inputAccessoryViewID}
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                </ScrollView>
                <InputAccessoryView nativeID={inputAccessoryViewID}>
                    <Button
                        onPress={() => this.setState({text: 'Placeholder Text'})}
                        title="Reset Text"
                    />
                </InputAccessoryView>
            </View>
        );
    }
}
// <View>
//       /<LineTitle>Внести доход:</LineTitle>
//        /   <Input name="transaction" onChange={this.handleChangeInput} value={transaction || ''}/>
//       /<LineTitle>Категория:</LineTitle>
//    /    <Input name="category" onChange={this.handleChangeInput} value={category || ''}/>
//<Button onClick={this.handleEnter}>Внести</Button>
// </View>
//         );
//     }
// }


const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;
const Input = styled.input`
  font-family: 'Marmelad';
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-left: 5px;
  color: white;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LineTitle = styled.dt`
  width: 150px;
`;
const LineInput = styled.dd`
  width: 150px;
  margin: 0;
`;
const Button = styled.button`
  font-family: 'Marmelad';
  color: white;
  border: 1px solid white;
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
`;
export default Incomes;