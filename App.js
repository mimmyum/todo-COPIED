/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const {height, width} = Dimensions.get("window");

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <Text style={styles.title}> Todo Copied</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"}></TextInput>

        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  title:{
    color: "white",
    fontSize: 32,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 50,
  },
  container:{
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center', 
  },
  card:{
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios:{
        shadowColor:"rgb(50, 50, 50",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset:{
          height: -1,
          width: 0,
        }
      },
      android:{
        elevation: 5,
      },
    })
    
  }
});

