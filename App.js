import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ForegroundHandler from './src/utils/ForegroundHandler';
import { NotificationServices, requestUserPermission } from './src/utils/PushNotification';



const App = () => {
  
  useEffect(()=>{
    requestUserPermission();
    NotificationServices();
  },[])

  return (
   <View style={{flexDirection:'row', justifyContent:'center',
   alignItems:'center',height:500}}>
    <ForegroundHandler/>
    <Text style={styles.highlight}>
      Notifiction App
    </Text>
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight:'bold',
    color:"black"
  },
});

export default App;
