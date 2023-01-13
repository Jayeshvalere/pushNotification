import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';

export default ForegroundHandler = () => {
    useEffect(()=>{
        //Foreground message handling
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          console.log('Notification in Forground',remoteMessage)
          const {messageId, notification} = remoteMessage
          PushNotification.localNotification({
            channelId:'channel_1',
            messageId:messageId,
            title:notification.title,
            body:notification.body,
            soundName:'default',
            vibrate: true,
            playSound: true,
            largeIcon : "ic_notification"
          })
        });
        return unsubscribe
    },[])
    return null
}