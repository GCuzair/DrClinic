import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';


const LoadingScreen = () => {
   
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.title}>DrClinic</Text>
      <Image
        source={require('../assets/images/Logo.png')} 
        style={styles.logo}
      />
      <Text style={styles.loading}>Loading...</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#000',
      },
      logo: {
        width: 180,
        height: 80,
        // marginBottom: 20,
        left:45,
        
      },
      loading: {
        position: 'absolute',
        bottom: 70,
        fontSize: 14,
        color: '#aaa',
      },

})

export default LoadingScreen;