/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import React from 'react';
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,

} from 'react-native';
import { Container, Header, Content, ListItem, Radio, Right, Left,Icon, Picker, Form,CheckBox,Body  } from 'native-base'
import { color } from 'react-native-reanimated';

let users = [
  {
    id: 1,
    name: 'Kristen Protestan',
  },
  {
    id: 2,
    name: 'Katolik',
  },
  {
    id: 3,
    name: 'Hindu',
  },

  {
    id: 4,
    name: 'Buddha',
  },
];

const radioItem = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' }
];

//var tempCheckValues = [];

export default class IdentitasActivity extends React.Component {
  //Menginisialisasi state.
  constructor(props) {
    super(props)

    this.state = {
      selected: "key2",
      one: false,
      two: false,
      three: false,
      itemSelected: 'itemOne',
    };
  }

  onePressed() {
    if (this.state.one)
      this.setState({ one: false });
    else
      this.setState({ one: true, two: false, three: false });
  }

  twoPressed() {
    if (this.state.two)
      this.setState({ two: false });
    else
      this.setState({ two: true });
  }

  threePressed() {
    if (this.state.three)
      this.setState({ three: false });
    else
      this.setState({ three: true });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onRadioButtonPressed(value: string, status: string){
    if(status == 'true'){
    this.setState({
      dipilih: true,
      color:"#5cb85c",
      itemSelected: value,
    });
  }
  }
 
  //Get current Timestamp
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      tanggal:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  //Method mengirimkan data ke activity lain
  Kirim_data = () => {
    this.props.navigation.navigate('Hasil', {
      NamaOBJ: this.state.nama,
      AsalOBJ: this.state.asal,
      WaktuOBJ: this.state.tanggal,
      dateOBJ: this.state.date,
      kelaminOBJ: this.state.option,
      agamaOBJ : this.state.agama,
    });
    this.setState({TextInput_nama: '', TextInput_asal: ''});
  };

  static navigationOptions = {
    title: 'Data',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

 


  render() {
    return (
      <View style={{flex: 0.8}}>
        <TextInput
          style={styles.textInput}
          placeholder="Nama"
          onChangeText={(text) => {
            this.setState({nama: text});
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Asal"
          onChangeText={(text) => {
            this.setState({asal: text});
          }}
        />

        {/* Radio Button */}

        <Container>
        <Header />
        <Content>
        <Text>Select your choice</Text>
   {
     radioItem.map((data, key) => {
         return (
                  <ListItem key={key}>

                     <Left>
                         <Text>{data.label}</Text>
                     </Left>
                     <Right>
                         <Radio
                            onPress={()=> this.setState({radioValue:data.value})}
                            color={"gray"}
                            selectedColor={"gray"}
                            selected={data.value === this.state.radioValue}
                          />
                     </Right>
                  </ListItem>
                 )
       })
   }
        </Content>
      </Container>

      <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>

        
        <View style={{ flexDirection: 'row' }}>
          <CheckBox checked={this.state.one}
            style={{ marginRight: 20 }}
            onPress={this.onePressed.bind(this)}/>
          <Text>One</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox checked={this.state.two}
            style={{ marginRight: 20 }}
            onPress={this.twoPressed.bind(this)}/>
          <Text>Two</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox checked={this.state.three}
            style={{ marginRight: 20 }}
            onPress={this.threePressed.bind(this)}/>
          <Text>Three</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  namaPahlawan: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  asal: {
    fontSize: 18,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#0fa0d1',
    height: 50,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 50,
  },
  model :{
marginBottom:20
  },
  checkbox: {
    alignSelf: "center",
  },
});
