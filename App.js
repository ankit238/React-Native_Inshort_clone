import { StyleSheet, Text, View,StatusBar,useWindowDimensions } from 'react-native';
import InshortTabs from './components/InshortTabs';
import React, { useState,useContext } from "react";
import Context, { NewsContext } from './API/Context';

 function App() {

const {darkTheme}=useContext(NewsContext)


  return (
    <View style={{...styles.container,backgroundColor:darkTheme?"#282C35": "white"}}>
     <InshortTabs />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    
  },
});

export default () => {
  return (<Context>
    <App />
  </Context>);
};

